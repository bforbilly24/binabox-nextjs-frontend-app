import Link from "next/link"
export default function PopupBid({ isModal, handleModal }) {
    return (
        <>
            <div className={`modal fade popup ${isModal ? "show d-block" : ""}`} id="popup_bid" tabIndex={-1} aria-modal="true" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body ">
                            <a onClick={handleModal} className="btn-close" data-dismiss="modal"><i className="fal fa-times" /></a>
                            <h3>Connect Your Wallet</h3>
                            <p className="sub-heading">Select what network and wallet you want to connect below</p>
                            <div className="tf-wallet">
                                <div className="image">
                                    <img src="/assets/images/svg/icon-wallet-1.svg" alt="Image" />
                                </div>
                                <div className="content">
                                    <div className="title">Meta Mask</div>
                                    <div className="sub">Conntect to you Metamask wallet</div>
                                </div>
                            </div>
                            <div className="tf-wallet">
                                <div className="image">
                                    <img src="/assets/images/svg/icon-wallet-2.svg" alt="Image" />
                                </div>
                                <div className="content">
                                    <div className="title">Fortmatic</div>
                                    <div className="sub">Conntect to you Fortmatic wallet</div>
                                </div>
                            </div>
                            <div className="tf-wallet">
                                <div className="image">
                                    <img src="/assets/images/svg/icon-wallet-3.svg" alt="Image" />
                                </div>
                                <div className="content">
                                    <div className="title">Bitski</div>
                                    <div className="sub">Conntect to you Bitski wallet</div>
                                </div>
                            </div>
                            <div className="tf-wallet mb30">
                                <div className="image">
                                    <img src="/assets/images/svg/icon-wallet-4.svg" alt="Image" />
                                </div>
                                <div className="content">
                                    <div className="title">Wallet Connect</div>
                                    <div className="sub">Scan with your mobile device to connect</div>
                                </div>
                            </div>
                            <div className="bottom">By connecting your wallet, you agree to our <Link href="#">Terms of Service</Link> and our <Link href="#">Privacy Policy.</Link></div>
                        </div>
                    </div>
                </div>
            </div>
            {isModal &&
                <div className="modal-backdrop fade show" onClick={handleModal}/>
            }
        </>
    )
}
