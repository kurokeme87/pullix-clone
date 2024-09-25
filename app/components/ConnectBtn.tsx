import { ConnectKitButton } from "connectkit";

import styled from "styled-components";
const StyledButton = styled.button`
  cursor: pointer;
   font-weight: 500; /* font-[500] */
  background-color: #0077b6; /* bg-[#0077b6] */
  background-image: linear-gradient(to right, #0077b6, #3fc5ea); /* bg-gradient-to-r from-[#0077b6] to-[#3fc5ea] */
  color: #ffffff; /* text-white */
  padding: 0.5rem 1rem; /* px-4 py-2 */
  border-radius: 0.5rem; /* rounded */
  font-size: 1rem; /* text-base */

 
`;

const ConnectedButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #18181b; 
  padding: 2px; /* py-[2px] */
  border-radius: 9999px; /* rounded-full */
 
`;

// Additional styles for icons and texts inside the connected button
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #252528;
  padding: 0.25rem;
  border-radius: 9999px; /* rounded-full */
`;

const BalanceText = styled.p`
  color: #ffffff;
  font-size: 12px;
`;

export const ConnectBtn = () => {
    return (
        <ConnectKitButton.Custom showAvatar={true} showBalance={true}>
          {({ isConnected, show, truncatedAddress, ensName, address  }) => {
            // if (isConnected) {
            //   const ethBalance = 0.00; // Add logic for fetching balance if needed
    
            //   return (
            //     <ConnectedButton onClick={show}>
            //       <div className="flex items-center md:gap-2 gap-1">
            //         {/* Display balance and ETH icon */}
                    
            //       </div>
            //       <IconContainer>
            //         {/* Replace with your user icon */}
                   
            //         <BalanceText>
            //           {ensName ? `${ensName} (${truncatedAddress})` : truncatedAddress}
            //         </BalanceText>
            //       </IconContainer>
            //     </ConnectedButton>
            //   );
            // }
    
            // return (
            //   <StyledButton onClick={show}>
            //     Connect Wallet
            //   </StyledButton>
            // );
          }}
        </ConnectKitButton.Custom>
      );
};