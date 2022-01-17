import { useContext, useEffect /*, useState*/ } from "react";
import AnchorLink from "anchor-link";
import AnchorLinkBrowserTransport from "anchor-link-browser-transport";
// import { eosWalletActorState } from "../../atoms/atoms";
import DotGemsContext from "../../1_core/DotGemsContext";
import { ContextModel } from "../../../models/Context.model";
import { buildChainHost } from "../../../utils/context";

// Todo; How to handle chainId and nodeUrl potentially being
// undefined in context (before the network is selected)
// Todo: Re-Implement eosWalletActorState using context.
const AnchorWallet = () => {

  const dotGemsCtx = useContext<ContextModel>(DotGemsContext);

  const transport = new AnchorLinkBrowserTransport();
  // const [eosActor, setEosActor] = useState(eosWalletActorState);
  
  const link = new AnchorLink({
    transport,
    chains: [
      {
        chainId: dotGemsCtx.state.selected_network?.chain_id,
        nodeUrl: dotGemsCtx.state.selected_network ? buildChainHost(dotGemsCtx.state.selected_network) : undefined,
      },
    ],
  });

  const loadEOSWalletData = () => {
    if (
      localStorage.getItem("anchor-link-eos-list") &&
      localStorage.getItem("anchor-link-eos-list") !== null
    ) {
      const anchor: any = localStorage.getItem("anchor-link-eos-list") || "";
      setTimeout(() => {
        const anchorObject: any = anchor ? JSON.parse(anchor) : [];
        // setEosActor(((anchorObject[0] || {}).auth || {}).actor || ""); // Todo: Reimplement
      }, 0);
    } else {
      // setEosActor(() => ""); // Todo: Reimplement
    }
  };

  useEffect(() => {
    console.log("Iam here!");
    addAccount();
  }, []);

  const addAccount = async () => {
    const identity = await link.login("eos");

    // Save the session within your application for future use
    const { session } = identity;
    if (session.auth.actor.toString()) {
      loadEOSWalletData();
    }
  };
};

export default AnchorWallet;
