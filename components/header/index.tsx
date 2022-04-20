import React, { FC } from 'react'

export const Header: FC = () => (
    <div className="js-header-wrapper header-wrapper-container has-tertiary">
    <div className="header-wrapper">
            <div className="Header-shadow-background"></div>
            <div className="Header-shadow primary-nav"></div>
            <header className="Header" data-component="header">


<a className="Header-logo" href="/">
<div className="Logo">
    <svg className="Logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 788 150">
        <title>Norlys</title>
        <path d="M103.25 94.43L27.59 3.05H0v144.18h30.56V54.76l76.59 92.47h26.79V3.05h-30.69zM637.73 3.05l-34.76 61.87L568.2 3.05h-34.59l53.88 93.3v50.88h30.96V96.35l53.87-93.3zm-144.76 0H462.2v144.18h101.57v-30.09h-70.8zM392.3 66.43h-43.77V33.25h42.29c2.28.05 4.6.21 7.1 1.04 6.28 2.35 10.78 8.51 10.78 15.74 0 9.04-7.36 16.4-16.4 16.4m26.03 22c13.12-8.76 20.95-23.33 20.95-38.96 0-23.85-18.15-43.54-41.41-46.12-1.53-.13-4.15-.31-6.52-.3h-73.21v144.18h30.77V96.45h30.38l28.82 50.78h34.58l-31.37-55.22c4.24-1.69 6.59-3.28 7.01-3.58M281.58 17.62C271.25 7.33 258.11 1.29 243.95.36 238.27-.02 233.67 0 233.67 0v31.16s8.49.43 12.77 1.53c11.8 3.05 21.06 14.1 21.73 27.32.76 14.98.81 16.74.01 29.83-.81 13.3-10.09 24.49-21.83 27.48-4.94 1.26-12.68 1.67-12.68 1.67V150s6.39-.09 10.28-.36c14.22-.97 27.26-7 37.57-17.33 10.86-10.87 17.35-25.27 18.28-40.55.88-14.39.83-17.28.01-33.37-.78-15.36-7.25-29.84-18.23-40.77M208.1.36c-14.16.93-27.3 6.97-37.63 17.26-10.98 10.93-17.45 25.41-18.23 40.78-.82 16.09-.87 18.98.01 33.37.93 15.28 7.43 29.68 18.28 40.55 10.31 10.33 23.35 16.36 37.57 17.33 3.88.27 10.28.36 10.28.36v-31.02s-7.74-.41-12.68-1.67c-11.74-2.99-21.01-14.18-21.82-27.48-.8-13.09-.75-14.85.01-29.83.67-13.22 9.94-24.27 21.73-27.32 4.28-1.11 12.77-1.53 12.77-1.53V0c-.01 0-4.61-.02-10.29.36m541.11 61.27c-7.07-1.56-15.45-2.82-22.84-3.93-5.22-.78-10.15-1.52-12.8-2.11-10.76-2.4-10.7-9.28-10.68-12.32.07-7.58 8.76-12.1 17.35-12.76 1.44-.14 3.17-.24 5.24-.23 2.25.01 4.08.11 5.61.26 11.25.7 17.79 6.53 19.66 10.97.59 1.4.87 2.25.87 2.25h29.99c.03-11.01-5.34-22.01-14.77-30.21C757.72 5.62 745.49.88 732.39.18c-3.4-.18-8.04-.22-11.8-.1-27.21.84-47.88 19.3-48.09 42.93-.18 20.92 13.02 36.89 34.45 41.66 3.7.82 8.89 1.6 14.9 2.5 6.91 1.03 14.74 2.21 20.79 3.55 14.79 3.27 14.72 11.29 14.7 13.92-.09 9.97-9.67 13.29-16.77 14.39-2.43.48-6.11.94-11.3.91-5.39-.03-9.11-.33-11.66-.68-6.14-.65-11.68-3.23-15.68-7.15-2.48-2.43-3.77-4.89-4.68-8.49h-29.94c0 10.77 4.58 21.41 13.05 29.88 11.52 11.52 25.77 15.85 40.73 16.29 4.91.15 6.74.17 12.45.14 14.31-.1 26.14-2.81 37.81-11.61 10.59-7.98 16.25-20.04 16.36-33.41.2-21.76-14.56-37.99-38.5-43.28" fill="#f7242e"></path>
    </svg>
</div>
</a>

<div className="Header-toggle">
    <button className="Header-open" type="button" data-component="navigation.open">
        <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
            <g>
                <rect width="16" height="2" rx="1"></rect>
                <rect y="5" width="16" height="2" rx="1"></rect>
                <rect y="10" width="16" height="2" rx="1"></rect>
            </g>
        </svg>
        <div className="u-hiddenVisually">Åben menu</div>
    </button><button className="Header-close" type="button" data-component="navigation.close">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 1.94444L12.0556 0.5L7 5.55556L1.94444 0.5L0.5 1.94444L5.55556 7L0.5 12.0556L1.94444 13.5L7 8.44444L12.0556 13.5L13.5 12.0556L8.44444 7L13.5 1.94444Z" fill="#323232"></path>
        </svg>
        <div className="u-hiddenVisually">Luk menu</div>
    </button>
</div>
<nav className="Navigation-primary u-sansSerif20" data-component="navigation.primary">
    <ul className="Navigation-list">
                <li className="Navigation-item">
                    <a href="/internet/" data-title="Internet" className="is-active">
                            <img className="Navigation-cardIcon" src="/media/mv5jez13/internet-ikon.png" alt="" />
                        <span>Internet</span>
                    </a>
                </li>
                <li className="Navigation-item">
                    <a href="/tv/" data-title="Tv &amp; streaming" className="">
                            <img className="Navigation-cardIcon" src="/media/veenvflk/tv-ikon.png" alt="" />
                        <span>Tv &amp; streaming</span>
                    </a>
                </li>
                <li className="Navigation-item">
                    <a href="/el/" data-title="El" className="">
                            <img className="Navigation-cardIcon" src="/media/shopwtfk/energi-ikon.png" alt="" />
                        <span>El</span>
                    </a>
                </li>
                <li className="Navigation-item">
                    <a href="/opladning/" data-title="Opladning" className="">
                            <img className="Navigation-cardIcon" src="/media/mnuo4cyx/el-ikon.png" alt="" />
                        <span>Opladning</span>
                    </a>
                </li>
                <li className="Navigation-item">
                    <a href="/smarthome/" data-title="SmartHome" className="">
                            <img className="Navigation-cardIcon" src="/media/04rlwfu1/smarthome-ikon.png" alt="" />
                        <span>SmartHome</span>
                    </a>
                </li>
                <li className="Navigation-item">
                    <a href="/naturgas/" data-title="Naturgas" className="">
                            <img className="Navigation-cardIcon" src="/media/0ein01av/gas-ikon.png" alt="" />
                        <span>Naturgas</span>
                    </a>
                </li>
    </ul>
</nav>
<nav className="Navigation-business">
    <ul className="Navigation-list u-sansSerif14 u-textGrey">
            <li className="Navigation-item">
                <a href="/" className="is-active">
                    <div className="Navigation-business-text" data-title="Privat">Privat</div>
                    <div className="Navigation-itemIcon">
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.92856 0.333374L5.99984 1.31735L8.84607 4.33337H0.666504V5.66671H8.84607L5.99984 8.68273L6.92856 9.66671L11.3332 5.00004L6.92856 0.333374Z" fill="white"></path>
                        </svg>
                    </div>
                </a>
            </li>
            <li className="Navigation-item">
                <a href="/erhverv/" className="">
                    <div className="Navigation-business-text" data-title="Erhverv">Erhverv</div>
                    <div className="Navigation-itemIcon">
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.92856 0.333374L5.99984 1.31735L8.84607 4.33337H0.666504V5.66671H8.84607L5.99984 8.68273L6.92856 9.66671L11.3332 5.00004L6.92856 0.333374Z" fill="white"></path>
                        </svg>
                    </div>
                </a>
            </li>
            <li className="Navigation-item">
                <a href="/om-norlys/" className="">
                    <div className="Navigation-business-text" data-title="Om Norlys">Om Norlys</div>
                    <div className="Navigation-itemIcon">
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.92856 0.333374L5.99984 1.31735L8.84607 4.33337H0.666504V5.66671H8.84607L5.99984 8.68273L6.92856 9.66671L11.3332 5.00004L6.92856 0.333374Z" fill="white"></path>
                        </svg>
                    </div>
                </a>
            </li>
            <li className="Navigation-item">
                <a href="/job/" className="">
                    <div className="Navigation-business-text" data-title="Karriere">Karriere</div>
                    <div className="Navigation-itemIcon">
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.92856 0.333374L5.99984 1.31735L8.84607 4.33337H0.666504V5.66671H8.84607L5.99984 8.68273L6.92856 9.66671L11.3332 5.00004L6.92856 0.333374Z" fill="white"></path>
                        </svg>
                    </div>
                </a>
            </li>
    </ul>
</nav>

<div className="Header-buttons u-sansSerif20">
            <a className="Header-button" href="/kundeservice/">
                <div className="Header-buttonIcon u-bgSubtleGreen">

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0001 3.96191C8.88257 3.96191 6.32821 6.373 6.1 9.43216C7.40964 9.82621 8.36364 11.0414 8.36364 12.4795V14.2977C8.36364 15.7418 7.40157 16.9612 6.08341 17.35V17.3532V17.3588V17.3644V17.37V17.3756V17.3812V17.3868V17.3924V17.398V17.4036V17.4093V17.4149V17.4205V17.4262V17.4319V17.4375V17.4432V17.4489V17.4545V17.4602V17.4659V17.4716V17.4773V17.483V17.4887V17.4944V17.5001V17.5059V17.5116V17.5173V17.5231V17.5288V17.5346V17.5403V17.5461V17.5518V17.5576V17.5633V17.5691V17.5749V17.5807V17.5864V17.5922V17.598V17.6038V17.6096V17.6154V17.6212V17.627V17.6328V17.6386V17.6444V17.6502V17.6561V17.6619V17.6677V17.6735V17.6794V17.6852V17.691V17.6969V17.7027V17.7085V17.7144V17.7202V17.726V17.7319V17.7377V17.7436V17.7494V17.7553V17.7611V17.767V17.7728V17.7787V17.7845V17.7904V17.7963V17.8021V17.808V17.8138V17.8197V17.8256V17.8314V17.8373V17.8431V17.849V17.8548V17.8607V17.8666V17.8724V17.8783V17.8841V17.89V17.8959V17.9017V17.9076V17.9134V17.9193V17.9251V17.931V17.9368V17.9427V17.9485V17.9544V17.9602V17.9661V17.9719V17.9777V17.9836V17.9894V17.9952V18.0011V18.0069V18.0127V18.0186V18.0244V18.0302V18.036V18.0418V18.0476V18.0534V18.0593V18.0651V18.0709V18.0767V18.0824V18.0882V18.094V18.0998V18.1056V18.1114V18.1171V18.1229V18.1287V18.1344V18.1402V18.146V18.1517V18.1574V18.1632V18.1689V18.1747V18.1804V18.1861V18.1918V18.1975V18.2033V18.209V18.2147V18.2204V18.226V18.2317V18.2374V18.2431V18.2487V18.2544V18.2601V18.2657V18.2714V18.277V18.2826V18.2883V18.2939V18.2995V18.3051V18.3107V18.3163V18.3219V18.3275V18.333V18.3386V18.3442V18.3497V18.3553V18.3608V18.3664V18.3719V18.3774V18.3829V18.3884V18.3939V18.3994V18.4049V18.4104V18.4158V18.4213V18.4267V18.4322V18.4376V18.443V18.4484V18.4539V18.4593V18.4646V18.47V18.4754V18.4808V18.4861V18.4915V18.4968V18.5021V18.5075V18.5128V18.5181V18.5234V18.5286V18.5339V18.5392V18.5444V18.5497V18.5549V18.5601V18.5653C6.08341 19.0012 6.18878 19.1503 6.28804 19.2297C6.43172 19.3446 6.77234 19.482 7.55563 19.482H10.332C10.612 18.8385 11.2535 18.3886 12 18.3886H12.9091C13.9132 18.3886 14.7273 19.2026 14.7273 20.2068C14.7273 21.2109 13.9132 22.0249 12.9091 22.0249H12C11.2547 22.0249 10.6141 21.5765 10.3334 20.9347V20.982H7.55563C6.67225 20.982 5.90176 20.8416 5.351 20.401C4.75581 19.9249 4.58341 19.2407 4.58341 18.5653V18.5601V18.5549V18.5497V18.5444V18.5392V18.5339V18.5286V18.5234V18.5181V18.5128V18.5075V18.5021V18.4968V18.4915V18.4861V18.4808V18.4754V18.47V18.4646V18.4593V18.4539V18.4484V18.443V18.4376V18.4322V18.4267V18.4213V18.4158V18.4104V18.4049V18.3994V18.3939V18.3884V18.3829V18.3774V18.3719V18.3664V18.3608V18.3553V18.3497V18.3442V18.3386V18.333V18.3275V18.3219V18.3163V18.3107V18.3051V18.2995V18.2939V18.2883V18.2826V18.277V18.2714V18.2657V18.2601V18.2544V18.2487V18.2431V18.2374V18.2317V18.226V18.2204V18.2147V18.209V18.2033V18.1975V18.1918V18.1861V18.1804V18.1747V18.1689V18.1632V18.1574V18.1517V18.146V18.1402V18.1344V18.1287V18.1229V18.1171V18.1114V18.1056V18.0998V18.094V18.0882V18.0824V18.0767V18.0709V18.0651V18.0593V18.0534V18.0476V18.0418V18.036V18.0302V18.0244V18.0186V18.0127V18.0069V18.0011V17.9952V17.9894V17.9836V17.9777V17.9719V17.9661V17.9602V17.9544V17.9485V17.9427V17.9368V17.931V17.9251V17.9193V17.9134V17.9076V17.9017V17.8959V17.89V17.8841V17.8783V17.8724V17.8666V17.8607V17.8548V17.849V17.8431V17.8373V17.8314V17.8256V17.8197V17.8138V17.808V17.8021V17.7963V17.7904V17.7845V17.7787V17.7728V17.767V17.7611V17.7553V17.7494V17.7436V17.7377V17.7319V17.726V17.7202V17.7144V17.7085V17.7027V17.6969V17.691V17.6852V17.6794V17.6735V17.6677V17.6619V17.6561V17.6502V17.6444V17.6386V17.6328V17.627V17.6212V17.6154V17.6096V17.6038V17.598V17.5922V17.5864V17.5807V17.5749V17.5691V17.5633V17.5576V17.5518V17.5461V17.5403V17.5346V17.5288V17.5231V17.5173V17.5116V17.5059V17.5001V17.4944V17.4887V17.483V17.4773V17.4716V17.4659V17.4602V17.4545V17.4489V17.4432V17.4375V17.4319V17.4262V17.4233C3.11221 17.1433 2 15.8504 2 14.2977V12.4795C2 10.9203 3.12155 9.62299 4.60193 9.35039C4.8728 5.50078 8.08155 2.46191 12.0001 2.46191C15.9186 2.46191 19.1274 5.5008 19.3982 9.35042C20.8785 9.62308 22 10.9203 22 12.4795V14.2977C22 16.0549 20.5755 17.4795 18.8182 17.4795C17.0609 17.4795 15.6364 16.0549 15.6364 14.2977V12.4795C15.6364 11.0414 16.5904 9.82612 17.9001 9.43211C17.6719 6.37298 15.1176 3.96191 12.0001 3.96191ZM6.86364 14.2977V12.4795C6.86364 11.5506 6.11066 10.7977 5.18182 10.7977C4.25297 10.7977 3.5 11.5506 3.5 12.4795V14.2977C3.5 15.2265 4.25298 15.9795 5.18182 15.9795C6.11066 15.9795 6.86364 15.2265 6.86364 14.2977ZM12 19.8886H12.9091C13.0848 19.8886 13.2273 20.031 13.2273 20.2068C13.2273 20.3825 13.0848 20.5249 12.9091 20.5249H12C11.8243 20.5249 11.6818 20.3825 11.6818 20.2068C11.6818 20.031 11.8243 19.8886 12 19.8886ZM20.5 12.4795V14.2977C20.5 15.2265 19.747 15.9795 18.8182 15.9795C17.8893 15.9795 17.1364 15.2265 17.1364 14.2977V12.4795C17.1364 11.5506 17.8893 10.7977 18.8182 10.7977C19.747 10.7977 20.5 11.5506 20.5 12.4795Z" fill="#323232"></path>
                    </svg>
                </div><span className="Header-buttonText">Kundeservice</span>
            </a>

    <a className="Header-button" href="https://norlysplay.dk/" target="_blank">
        <div className="Header-buttonIcon u-bgSubtleGreen">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5527 1.50977L15.9049 2.29047L13.4749 6.49951L21.5 6.49951V20.4995H2.5V6.49951L10.5602 6.49951L8.13477 2.29858L9.46234 1.53211L12.0011 5.92935L14.5527 1.50977ZM20 18.9995H4L4 7.99951L20 7.99951V18.9995ZM10.5 10.9995V16.2495L15 13.6245L10.5 10.9995Z" fill="#323232"></path>
            </svg>
        </div><span className="Header-buttonText">Se tv</span>
    </a>

    <a href="/login/" className="Header-button">
        <div className="Header-buttonIcon u-bgDarkGreen u-textLight">
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Property 1=24, Property 2=Profile">
                    <path id="Union" d="M15.5 8C15.5 9.933 13.933 11.5 12 11.5C10.067 11.5 8.5 9.933 8.5 8C8.5 6.067 10.067 4.5 12 4.5C13.933 4.5 15.5 6.067 15.5 8ZM14.7578 12.1713C16.109 11.2762 17 9.74216 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 9.74216 7.89101 11.2762 9.24218 12.1713C7.66842 12.6871 6.46978 13.6258 5.60348 14.701C4.31283 16.3029 3.75 18.2176 3.75 19.5C3.75 19.9142 4.08579 20.25 4.5 20.25C4.91421 20.25 5.25 19.9142 5.25 19.5C5.25 18.5733 5.68717 16.988 6.77152 15.6421C7.83086 14.3273 9.49864 13.25 12 13.25C14.5014 13.25 16.1691 14.3273 17.2285 15.6421C18.3128 16.988 18.75 18.5733 18.75 19.5C18.75 19.9142 19.0858 20.25 19.5 20.25C19.9142 20.25 20.25 19.9142 20.25 19.5C20.25 18.2176 19.6872 16.3029 18.3965 14.701C17.5302 13.6258 16.3316 12.6871 14.7578 12.1713Z" fill="#ffffff"></path>
                </g>
            </svg>
        </div><span className="Header-buttonText">Log på</span>
    </a>
</div>

<div className="Header-helpButtons">
<button type="button" className="Header-button" data-component="callUs.toggle">
    <div className="Header-buttonIcon u-bgSubtleGreen">
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.04167 8.36588C-0.051397 6.47264 0.597275 4.05176 2.49052 2.9587L5.91853 0.979533L8.8352 6.03135L6.85056 7.17718C6.75091 7.23471 6.71677 7.36213 6.7743 7.46177L10.1076 13.2353C10.1652 13.3349 10.2926 13.3691 10.3922 13.3115L12.3769 12.1657L15.2935 17.2175L11.8655 19.1967C9.97227 20.2897 7.5514 19.6411 6.45833 17.7478L1.04167 8.36588ZM3.11552 4.04123C1.82014 4.78912 1.37631 6.44551 2.1242 7.74088L7.54086 17.1228C8.28875 18.4182 9.94514 18.862 11.2405 18.1141L13.586 16.76L11.9193 13.8732L11.0172 14.3941C10.3197 14.7968 9.42781 14.5578 9.0251 13.8603L5.69177 8.08677C5.28906 7.38926 5.52805 6.49736 6.22556 6.09465L7.12767 5.57382L5.461 2.68706L3.11552 4.04123Z" fill="#323232"></path>
        </svg>
    </div><span>Ring til os</span>
</button>
</div>

<div className="Header-phoneNumbers" data-component="callUs.target">
<div className="Header-phoneNumbers--numbersContainer">
            <div className="Header-phoneNumbers--number">
                <div>
                    El og gas<span className="secondary-text">Kundeservice</span>
                </div>
                <a href="tel:70151670">70 15 16 70</a>
            </div>
            <div className="Header-phoneNumbers--number">
                <div>
                    Internet og tv<span className="secondary-text">Kundeservice</span>
                </div>
                <a href="tel:70332033">70 33 20 33</a>
            </div>
            <div className="Header-phoneNumbers--number">
                <div>Hovednummer</div>
                <a href="tel:70115000">70 11 50 00</a>
            </div>

</div>
<div className="Header-phoneNumbers--cancel" data-component="callUs.close">Annuller</div>
</div>


            </header>
            <div className="Header-backdrop" data-component="navigation.backdrop"></div>

            <div className="Header-shadow tertiary"></div>
<div className="navigation-local-container js-tertiary-nav">
<nav className="navigation-local u-sansSerif20">
    <ul className="navigation-local-ul">
            <li><a href="/internet/" className=""><span data-title="Bestil tv">En Rejse i Fronten</span></a></li>
            <li><a href="/internet/komponent-bibliotek/" className=""><span data-title="Streaming">Komponent Bibliotek</span></a></li>
            <li><a href="/internet/bestil-ny-frontend/" className=""><span data-title="Norlys Play">Bestil Ny Frontend</span></a></li>
    </ul>

    <div className="gradient">
        <button className="navigation-button-left" type="button"></button>
    </div>

    <div className="gradient">
        <button className="navigation-button" type="button"></button>
    </div>
</nav>

</div>
    </div>
</div>
);
