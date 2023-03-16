//natives
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

//material-ui
import { optionUnstyledClasses } from "@mui/base/OptionUnstyled";
import SelectUnstyled from "@mui/base/SelectUnstyled";
import OptionUnstyled from "@mui/base/OptionUnstyled";
import UnfoldMoreRoundedIcon from "@mui/icons-material/UnfoldMoreRounded";
import OptionGroupUnstyled from "@mui/base/OptionGroupUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { styled } from "@mui/system";

//3rd-parties
import axios from "axios";
import { Metaplex } from "@metaplex-foundation/js";
import { useWallet } from "@solana/wallet-adapter-react";
import { Connection } from "@solana/web3.js";
import { clusterApiUrl } from "@solana/web3.js";
import { reverseLookup, getAllDomains } from "@bonfida/spl-name-service";
import { useConnection } from "@solana/wallet-adapter-react";

//locals
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";

/**
 * Page to see all books
 */

//STARTOF: Custom Select
const Button = React.forwardRef(function Button(props, ref) {
  const { ownerState, ...other } = props;
  return (
    <button type="button" {...other} ref={ref}>
      {other.children}
      <UnfoldMoreRoundedIcon />
    </button>
  );
});
const StyledButton = styled(Button, { shouldForwardProp: () => true })(
  ({ theme }) => `
  font-family: Inter Tight Regular;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: 320px;
  padding: 12px;
  border-radius: 5px;
  text-align: left;
  line-height: 1.5;
  background: var(--white);
  border: 0px solid var(--white);
  color: var(--obsidian-dark);
  position: relative;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background:  var(--obsidian-dark);
    color: var(--white);
  }

  & > svg {
    font-size: 1rem;
    position: absolute;
    height: 100%;
    top: 0;
    right: 10px;
  }
  `
);
const StyledListbox = styled("ul")(
  ({ theme }) => `
  font-family: Inter Tight Regular;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  padding-top: 1px;
  margin: 5px 0;
  min-width: 320px;
  max-height: 300px;
  border-radius: 5px;
  overflow: auto;
  outline: 0px;
  background: var(--white);
  border: 0px solid var(--white);
  color: var(--obsidian-dark);
  `
);
const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  margin-top:5px;
  border-radius: 5px;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: var(--obsidian-dark);
    color: var(--white);
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: var(--obsidian-dark);
    color: var(--white);
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: var(--obsidian-dark);
    color: var(--white);
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: var(--obsidian-dark);
    color: var(--white);
  }
  `
);
const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;
const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
  const slots = {
    root: StyledButton,
    listbox: StyledListbox,
    popper: StyledPopper,
    ...props.slots,
  };

  return <SelectUnstyled {...props} ref={ref} slots={slots} />;
});
//start mobile
const MobileButton = styled(Button, { shouldForwardProp: () => true })(
  ({ theme }) => `
  font-family: Inter Tight Regular;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: calc(80vw - 60px);
  padding: 12px;
  border-radius: 12px;
  text-align: left;
  line-height: 1.5;
  background: var(--obsidian-dark);
  border: 0px solid var(--obsidian-dark);
  color: var(--white);
  position: relative;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background:  var(--white);
    color: var(--obsidian-dark);
  }

  & > svg {
    font-size: 1rem;
    position: absolute;
    height: 100%;
    top: 0;
    right: 10px;
  }
  `
);
const MobileListbox = styled("ul")(
  ({ theme }) => `
  font-family: Inter Tight Regular;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 10px;
  margin: 12px 0;
  min-width:  calc(80vw - 60px);
  max-height: 300px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: var(--obsidian-dark);
  border: 0px solid var(--obsidian-dark);
  color: var(--white);
  `
);
const MobileOption = styled(OptionUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: var(--white);
    color: var(--obsidian-dark);
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: var(--white);
    color: var(--obsidian-dark);
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: var(--white);
    color: var(--obsidian-dark);
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: var(--white);
    color: var(--obsidian-dark);
  }
  `
);
const MobileGroupRoot = styled("li")`
  list-style: none;
`;
const MobileGroupHeader = styled("span")`
  display: block;
  padding: 15px 0 5px 10px;
  font-size: 0.75em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  color: var(--sign);
`;
const MobileGroupOptions = styled("ul")`
  list-style: none;
  margin-left: 0;
  padding: 0;
  > li {
    padding-left: 20px;
  }
`;
const MobilePopper = styled(PopperUnstyled)`
  z-index: 1;
`;
const MobileSelect = React.forwardRef(function CustomSelect(props, ref) {
  const slots = {
    root: MobileButton,
    listbox: MobileListbox,
    popper: MobilePopper,
    ...props.slots,
  };

  return <SelectUnstyled {...props} ref={ref} slots={slots} />;
});
const MobileOptionGroup = React.forwardRef(function CustomOptionGroup(
  props,
  ref
) {
  const slots = {
    root: MobileGroupRoot,
    label: MobileGroupHeader,
    list: MobileGroupOptions,
    ...props.slots,
  };

  return <OptionGroupUnstyled {...props} ref={ref} slots={slots} />;
});

//ENDOF: Custom Select

export default function Index() {
  const [name, setName] = useState(null);
  const [nfts, setNfts] = useState(null);
  const [filterPreference, setFilterPreference] = useState(0);
  const wallet = useWallet();
  const connection = useConnection().connection;
  const metaplex = new Metaplex(connection);
  const fetchDomain = async () => {
    console.log("fetching .sol-domains...");

    try {
      if (wallet.connected) {
        /* const domains = await getAllDomains(connection, wallet.publicKey);
        if (domains.length >= 1) {
          const sorted = domains.sort();
          const domain = await reverseLookup(connection, sorted[0]);
          setName(domain);
        } else { */
        const shortKey =
          wallet.publicKey.toBase58()[0] +
          wallet.publicKey.toBase58()[1] +
          wallet.publicKey.toBase58()[2] +
          "..." +
          wallet.publicKey.toBase58()[wallet.publicKey.toBase58().length - 3] +
          wallet.publicKey.toBase58()[wallet.publicKey.toBase58().length - 2] +
          wallet.publicKey.toBase58()[wallet.publicKey.toBase58().length - 1];
        setName(shortKey);
      }
    } catch (e) {
      console.error(e);
    }
  };
  const fetchNFTs = async () => {
    console.log("fetching nfts...");
    try {
      if (wallet.connected) {
        const nftArray = await metaplex.nfts().findAllByOwner({
          owner: wallet.publicKey,
        });
        console.log(nftArray);
        if (nftArray) {
          const filtered = [];
          for (let i = 0; i < nftArray.length; i++) {
            if (nftArray[i].symbol == "BOOK") {
              const { data } = await axios.get(nftArray[i].uri);
              const cid =
                data.properties.files[0].uri.split("/")[
                  data.properties.files[0].uri.split("/").length - 1
                ];
              console.log(cid);
              const object = {
                address: nftArray[i].address,
                name: nftArray[i].name,
                cover: data.image,
                text: cid,
                creator: nftArray[i].creators[0].address.toBase58(),
              };
              filtered.push(object);
            }
          }
          const sorted = filtered.sort();
          setNfts(sorted);
          console.log(sorted);
        }
      }
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    if (wallet.connected) {
      fetchDomain();
      fetchNFTs();
    }
  }, [wallet.connected]);

  return (
    <>
      {name && nfts && (
        <div className="my-collection">
          <div className="my-collection-title-container">
            <div className="my-collection-title">My collection</div>
          </div>
          {/* <div className="my-collection-filter-container">
            <div className="my-collection-filter">
              <CustomSelect
                defaultValue={filterPreference}
                onChange={(e, newValue) => setFilterPreference(newValue)}
              >
                <StyledOption value={0}>Alphabetical</StyledOption>
                <StyledOption value={1}>Price: Low to high</StyledOption>
                <StyledOption value={2}>Price: High to Low</StyledOption>
              </CustomSelect>
            </div>
          </div> */}
          <div className="my-collection-items">
            <div className="my-collection-items-grid">
              {nfts.map((i) => (
                <div className="my-collection-item" key={i.address}>
                  <div className="my-collection-item-cover">
                    <Image src={i.cover} width={200} height={200} />
                  </div>
                  <div className="my-collection-item-details">
                    <div className="my-collection-item-name">{i.name}</div>
                    <div className="my-collection-item-creator">
                      {"Created by:  " +
                        i.creator[0] +
                        i.creator[1] +
                        i.creator[2] +
                        i.creator[3] +
                        "..." +
                        i.creator[40] +
                        i.creator[41] +
                        i.creator[42] +
                        i.creator[43]}
                    </div>
                    <div className="my-collection-item-read-button">
                      <Link
                        href={
                          "/reader?item=" +
                          i.text +
                          "&name=" +
                          i.name +
                          "&creator=" +
                          name
                        }
                      >
                        <button>read</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {(!name || !nfts) && <Loader />}
      <Navbar />
    </>
  );
}
