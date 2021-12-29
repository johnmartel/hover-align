import * as I18nWrapper from './i18nWrapper.js';
import ModuleLogger from './moduleLogger.js';

function resetTokenTooltip(token) {
  ModuleLogger.debug(`Reset token ${token.data._id} tooltip`);

  if (token.elevationTooltip) {
    token.hud.tooltip.text = token.elevationTooltip;
  } else {
    token.hud.tooltip.text = '';
  }
}

function displayTokenTooltipWithAlignment(token) {
  ModuleLogger.debug(`Token ${token.data._id} tooltip can be displayed`);

  const elevationTooltip = token.hud.tooltip.text;
  token.elevationTooltip = elevationTooltip;
  let tooltip = '';
  if (elevationTooltip.length > 0) {
    tooltip = `${elevationTooltip}\n`;
  }
  token.hud.tooltip.text = `${tooltip}${I18nWrapper.localize('hover-align.alignment.title')}: ${
    token.actor.data.data.details.alignment
  }`;
}

export default function showAlignment(token, isHovering) {
  if (!isHovering) {
    resetTokenTooltip(token);
  } else {
    ModuleLogger.debug(`Check if token ${token.data._id} tooltip can be displayed`);

    if (token.actor.hasPlayerOwner || game.user.isGM) {
      displayTokenTooltipWithAlignment(token);
    }
  }

  token.refreshHUD();
}
