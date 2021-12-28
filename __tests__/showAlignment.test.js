import showAlignment from '@modules/showAlignment';

const PLAYER_TOKEN = true;
const NPC_TOKEN = false;

function initializeToken(hasPlayerOwner, originalGetTooltipText) {
  const token = {
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
    drawTooltip: jest.fn(() => token._getTooltipText()),
    refresh: jest.fn(),
    tooltip: { text: '' },
    uuid: 'test-token',
    _getTooltipText: originalGetTooltipText,
  };
  return token;
}

describe('showAlignment', () => {
  global.game = {
    user: { isGM: false },
  };

  describe('when hovering over a token', () => {
    it('should display alignment for GM', () => {
      game.user.isGM = true;
      const originalGetTooltipText = jest.fn(() => '');
      const token = initializeToken(NPC_TOKEN, originalGetTooltipText);

      showAlignment(token, true);

      expect(token._getTooltipText()).toBe('hover-align.alignment.title: Chaotic Evil');
      expect(token.drawTooltip).toHaveBeenCalled();
      expect(token.refresh).toHaveBeenCalled();
    });

    it('should append alignment to any tooltip set by the core', () => {
      game.user.isGM = true;
      const originalGetTooltipText = jest.fn(() => '+ 300ft');
      const token = initializeToken(NPC_TOKEN, originalGetTooltipText);

      showAlignment(token, true);

      expect(token._getTooltipText()).toBe('+ 300ft\nhover-align.alignment.title: Chaotic Evil');
      expect(token.drawTooltip).toHaveBeenCalled();
      expect(token.refresh).toHaveBeenCalled();
    });

    it('should display alignment for player when token is owned by a player', () => {
      game.user.isGM = false;
      const originalGetTooltipText = jest.fn(() => '');
      const token = initializeToken(PLAYER_TOKEN, originalGetTooltipText);

      showAlignment(token, true);

      expect(token._getTooltipText()).toBe('hover-align.alignment.title: Chaotic Evil');
      expect(token.drawTooltip).toHaveBeenCalled();
      expect(token.refresh).toHaveBeenCalled();
    });

    it('should not display alignment for player when token is not owned by a player', () => {
      game.user.isGM = false;
      const originalGetTooltipText = jest.fn(() => '');
      const token = initializeToken(NPC_TOKEN, originalGetTooltipText);

      showAlignment(token, true);

      expect(token._getTooltipText()).toBeEmpty();
      expect(token.drawTooltip).toHaveBeenCalled();
      expect(token.refresh).toHaveBeenCalled();
    });
  });

  describe('when hovering out of a token', () => {
    it('should reset the tooltip to what is provided by the core', () => {
      game.user.isGM = false;
      const originalGetTooltipText = jest.fn(() => '+ 300ft');
      const token = initializeToken(PLAYER_TOKEN, originalGetTooltipText);

      showAlignment(token, false);

      expect(token._getTooltipText()).toBe('+ 300ft');
      expect(token.drawTooltip).toHaveBeenCalled();
      expect(token.refresh).toHaveBeenCalled();
    });
  });
});
