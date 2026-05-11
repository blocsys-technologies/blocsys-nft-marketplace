import { services } from "../../services";
let networkId = 1;
async function fetchNetworkId() {
  networkId = await services.getNetworkId();
}
fetchNetworkId();

function getContractAddresses() {
  if (networkId === "0x4" || +networkId === 4)
    return {
      nftContractAddress: "0x63DBD57A1628DD5fADeBa2623a16D6CEDFe79f9B",
      escrowContractAddres: "0xF1b175EA3c50C96D8800D47823c53724AE1bA5C9",
    };
  else if (+networkId === 1 || networkId === "0x1")
    return {
      nftContractAddress: "0x63DBD57A1628DD5fADeBa2623a16D6CEDFe79f9B",
      escrowContractAddres: "0xF1b175EA3c50C96D8800D47823c53724AE1bA5C9",
    };
  else
    return {
      nftContractAddress: "0x63DBD57A1628DD5fADeBa2623a16D6CEDFe79f9B",
      escrowContractAddres: "0xF1b175EA3c50C96D8800D47823c53724AE1bA5C9",
    };
}
export default getContractAddresses;
