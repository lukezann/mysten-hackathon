import React from 'react'
import '../App.css';
import './OrganizationsListStyle.css';
import DonateButton from './DonateButton'
import TotalBalance from './TotalBalance';
import { BalanceProvider } from './BalanceContext';

const OrganizationsList = () => {
    return (
        <div className="flex-column large-container">
            <div className="flex flex-col row-start-1 col-start-2 col-end-4 justify-center items-center">
                <h2 className="text-white font-bold text-3xl">Current Fundraisers</h2>
            </div>
            <FundraiserBlock />
        </div>
    )
}

export default OrganizationsList;

function FundraiserBlock() { //need parameters
    return (
      <div className = "infoBlock">
        <table className="infoTable">
            <tr className="infoRow">
                <th>Organization</th>
                <th>Total</th>
            </tr>
            <DonationBlock name={"Williams"} _org_id={'0x62be33c3b976258aebd029d44b23154d5862d9e2b5a100a17c43f0c817214f4e'}/>
            <DonationBlock name={"Mysten"} _org_id={'0x0f965689c52bc13e5b1d90f6e1600628c5f2d1e989f39a10e1c83267fca133c5'}/>
            <DonationBlock name={"Marcus"} _org_id={'0xe81bf1f27d67b9261b1e7ca06e50d76ae12e01c44c2ac4b673f07866c7a9406e'}/>
        </table>
      </div>  
    );
  }

interface DonationBlockProps {
    name : string,
    _org_id : string
}

const DonationBlock : React.FC<DonationBlockProps> = ({name, _org_id}) => {
    return (
        <>
            <tr className="donation-row">
                <td className="donation-container">
                        <td>{name}</td>
                </td>
                <td className="donation-container">
                        <td>
                        <BalanceProvider _org_id={_org_id}>
                            <TotalBalance/>
                        </BalanceProvider>
                        </td>
                </td> 
            </tr>
            <tr> 
                 <td>
                    <BalanceProvider _org_id={_org_id}>
                        <DonateButton org_id={_org_id}/>
                    </BalanceProvider>
                 </td>
                 <td>
                </td>
            </tr>
        </>
            
        
    ); 
}