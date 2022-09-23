import { useRouter } from 'next/router'
import { BsArrowLeftShort } from 'react-icons/bs'
// sandipan
// sandipan branch change
const style = {
    wrapper: `border-[#38444d] border-b`,
    header: `py-1 px-3 mt-2 flex items-center`,
    primary: `bg-transparent outline-none font-bold`,
    secondary: `text-[#8899a6] text-xs`,
    backButton: `text-3xl cursor-pointer mr-2 rounded-full hover:bg-[#313b44] p-1`,
    coverPhotoContainer: `flex items-center justify-center h-[15vh] overflow-hidden`,
    coverPhoto: `object-cover h-full w-full`,
    profileImageContainer: `w-full h-[6rem] rounded-full mt-[-3rem] mb-2 flex justify-start items-center px-3 flex justify-between`,
    profileImage: `object-cover rounded-full h-full`,
    profileImageNft: `object-cover h-full`,
    profileImageMint: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
    details: `px-3`,
    nav: `flex justify-around mt-4 mb-2 text-xs font-semibold text-[#8899a6]`,
    activeNav: `text-white`,
}

const ProfileHeader = () => {
    const router = useRouter();
    const isProfileImageNft = true;
    const currentAccount = '0xjfklaj89098409283o4l2jl34j2l3409234023nkj';
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <div className={style.backButton} onClick={() => { router.push('/') }}>
                    <BsArrowLeftShort />
                </div>
                <div className={style.details}>
                    <div className={style.primary}>Sandipan Mahata</div>
                    <div className={style.secondary}>4 Tweets</div>
                </div>
            </div>
            <div className={style.coverPhotoContainer}>
                <img src="#" alt="cover" className={style.coverPhoto} />
            </div>
            <div className={style.profileImageContainer}>
                <div className={isProfileImageNft ? 'hex' : style.profileImageContainer}>
                    <img className={isProfileImageNft ? style.profileImageNft : style.profileImage} src="data:image/jpeg;base64,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" alt="" />
                </div>
            </div>
            <div className={style.details}>
                <div>
                    <div className={style.primary}>Sandipan Mahata</div>
                </div>
                <div className={style.secondary}>
                    {currentAccount && (
                        <>{currentAccount.slice(0, 8)}....{currentAccount.slice(37)}</>
                    )}
                </div>
            </div>
            <div className={style.nav}>
                <div className={style.activeNav}>Tweets</div>
                <div>Tweets & Replies</div>
                <div>Media</div>
                <div>Likes</div>
            </div>
        </div>
    )
}

export default ProfileHeader