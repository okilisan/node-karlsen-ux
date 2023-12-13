export * from './flow-ux.js';

import {KarlsenWalletDesktop} from './karlsen-wallet-desktop.js';
import {KarlsenWalletMobile, isMobile, dontInitiatedComponent} from './karlsen-wallet-mobile.js';

if(isMobile)
	document.body.classList.add('is-mobile');
export {isMobile}

export const KarlsenWallet = isMobile ? KarlsenWalletMobile : KarlsenWalletDesktop;

if(!dontInitiatedComponent)
	KarlsenWallet.define("karlsen-wallet");
