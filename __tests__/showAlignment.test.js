import showAlignment from '@modules/showAlignment';

const PLAYER_TOKEN = true;
const NPC_TOKEN = false;

function initializeToken(hasPlayerOwner, originalTooltip = '') {
  return {
    actor: {
      data: {
        data: {
          details: {
            alignment: 'Chaotic Evil',
          },
        },
      },
      hasPlayerOwner: hasPlayerOwner,
    },
    refreshHUD: jest.fn(),
    hud: {
      tooltip: { text: originalTooltip },
    },
    data: {
      id: 'test-token',
    },
  };
}

describe('showAlignment', () => {
  global.game = {
    user: { isGM: false },
  };

  describe('when hovering over a token', () => {
    it('should display alignment for GM', () => {
      game.user.isGM = true;
      const token = initializeToken(NPC_TOKEN);

      showAlignment(token, true);

      expect(token.hud.tooltip.text).toBe('hover-align.alignment.title: Chaotic Evil');
      expect(token.refreshHUD).toHaveBeenCalled();
    });

    it('should append alignment to any tooltip set by the core', () => {
      game.user.isGM = true;
      const token = initializeToken(NPC_TOKEN, '+ 300ft');

      showAlignment(token, true);

      expect(token.hud.tooltip.text).toBe('+ 300ft\nhover-align.alignment.title: Chaotic Evil');
      expect(token.refreshHUD).toHaveBeenCalled();
    });

    it('should display alignment for player when token is owned by a player', () => {
      game.user.isGM = false;
      const token = initializeToken(PLAYER_TOKEN);

      showAlignment(token, true);

      expect(token.hud.tooltip.text).toBe('hover-align.alignment.title: Chaotic Evil');
      expect(token.refreshHUD).toHaveBeenCalled();
    });

    it('should not display alignment for player when token is not owned by a player', () => {
      game.user.isGM = false;
      const token = initializeToken(NPC_TOKEN);

      showAlignment(token, true);

      expect(token.hud.tooltip.text).toBeEmpty();
      expect(token.refreshHUD).toHaveBeenCalled();
    });
  });

  describe('when hovering out of a token', () => {
    it.each(['+ 300ft', ''])('should reset the tooltip to `%s` provided by the core', (originalTooltip) => {
      game.user.isGM = false;
      const token = initializeToken(PLAYER_TOKEN, originalTooltip);

      showAlignment(token, true);
      showAlignment(token, false);

      expect(token.hud.tooltip.text).toBe(originalTooltip);
      expect(token.refreshHUD).toHaveBeenCalled();
    });

    it('given token.elevationTooltip not set, should clear the tooltip', () => {
      game.user.isGM = false;
      const token = initializeToken(PLAYER_TOKEN, '+ 300ft');

      showAlignment(token, false);

      expect(token.hud.tooltip.text).toBeEmpty();
      expect(token.refreshHUD).toHaveBeenCalled();
    });
  });
});
