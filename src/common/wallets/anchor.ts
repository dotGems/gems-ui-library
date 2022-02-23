// import react, { FC, useEffect } from "react";
import AnchorLink, { LinkSession } from "anchor-link";
import AnchorLinkBrowserTransport from "anchor-link-browser-transport";

  const transport = new AnchorLinkBrowserTransport();
  const link = new AnchorLink({
    transport,
    chains: [
      {
        chainId:
          "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
        nodeUrl: "https://eos.greymass.com",
      },
    ],
  });

  export const login = async() => {
    const identity = await link.login("eos");

    // Save the session within your application for future use
    const { session } = identity;
    if (session.auth.actor.toString()) {
      console.log(session);
      // return session;
      // loadEOSWalletData();
      // handleClose();
      // linkAccountForPomeloClaiming();
    }
  };

export const getWalletDataFromLocalStorage = async () => {

  if (
      localStorage.getItem("anchor-link-eos-list") &&
      localStorage.getItem("anchor-link-eos-list") !== null
    ) {
      const anchor: any = localStorage.getItem("anchor-link-eos-list") || "";

      setTimeout(() => {
        const anchorObject: any = anchor ? JSON.parse(anchor) : [];
        console.log(((anchorObject[0] || {}).auth || {}).actor || "");
        let actor = anchorObject[0]?.auth?.actor;
        if(!actor) {
          return ""
        } else {
          return actor; 
        }
      }, 0);
      return "";
  }
  else {
    return "";  
  }

}
