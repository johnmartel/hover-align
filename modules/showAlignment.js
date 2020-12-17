import * as I18nWrapper from './i18nWrapper.js';
import ModuleLogger from './moduleLogger.js';

function getTooltipTextFromOtherStuffThanElevation() {
  const elevationTooltip = this.originalGetTooltipText();
  let tooltip = '';
  if (elevationTooltip.length > 0) {
    tooltip = `${elevationTooltip}\n`;
  }
  return `${tooltip}${I18nWrapper.localize('hover-align.alignment.title')}: ${this.actor.data.data.details.alignment}`;
}

function resetTokenTooltip(token) {
  ModuleLogger.debug(`Reset token ${token.uuid} tooltip`);

  token.tooltip.text = '';

  // istanbul ignore next: this is a safety net in case `originalGetTooltipText` gets bumped by core
  if (token.originalGetTooltipText) {
    token._getTooltipText = token.originalGetTooltipText;
  }
}

function displayTokenTooltipWithAlignment(token) {
  ModuleLogger.debug(`Token ${token.uuid} tooltip can be displayed`);

  token.originalGetTooltipText = token._getTooltipText;
  token._getTooltipText = getTooltipTextFromOtherStuffThanElevation.bind(token);
}

export default function showAlignment(token, isHovering) {
  if (!isHovering) {
    resetTokenTooltip(token);
  } else {
    ModuleLogger.debug(`Check if token ${token.uuid} tooltip can be displayed`);

    if (token.actor.hasPlayerOwner || game.user.isGM) {
      displayTokenTooltipWithAlignment(token);
    }
  }

  token.drawTooltip();
  token.refresh();
}
