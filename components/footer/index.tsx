export const Footer = () => (
  <footer className="Footer u-bgBaseLightGrey u-islandT64B72">
    <div className="u-constrain">

        <a className="footer--logo footer-spacing" href="/">
            <div className="Logo">
                <svg className="Logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 788 150">
                    <title>Norlys</title>
                    <path d="M103.25 94.43L27.59 3.05H0v144.18h30.56V54.76l76.59 92.47h26.79V3.05h-30.69zM637.73 3.05l-34.76 61.87L568.2 3.05h-34.59l53.88 93.3v50.88h30.96V96.35l53.87-93.3zm-144.76 0H462.2v144.18h101.57v-30.09h-70.8zM392.3 66.43h-43.77V33.25h42.29c2.28.05 4.6.21 7.1 1.04 6.28 2.35 10.78 8.51 10.78 15.74 0 9.04-7.36 16.4-16.4 16.4m26.03 22c13.12-8.76 20.95-23.33 20.95-38.96 0-23.85-18.15-43.54-41.41-46.12-1.53-.13-4.15-.31-6.52-.3h-73.21v144.18h30.77V96.45h30.38l28.82 50.78h34.58l-31.37-55.22c4.24-1.69 6.59-3.28 7.01-3.58M281.58 17.62C271.25 7.33 258.11 1.29 243.95.36 238.27-.02 233.67 0 233.67 0v31.16s8.49.43 12.77 1.53c11.8 3.05 21.06 14.1 21.73 27.32.76 14.98.81 16.74.01 29.83-.81 13.3-10.09 24.49-21.83 27.48-4.94 1.26-12.68 1.67-12.68 1.67V150s6.39-.09 10.28-.36c14.22-.97 27.26-7 37.57-17.33 10.86-10.87 17.35-25.27 18.28-40.55.88-14.39.83-17.28.01-33.37-.78-15.36-7.25-29.84-18.23-40.77M208.1.36c-14.16.93-27.3 6.97-37.63 17.26-10.98 10.93-17.45 25.41-18.23 40.78-.82 16.09-.87 18.98.01 33.37.93 15.28 7.43 29.68 18.28 40.55 10.31 10.33 23.35 16.36 37.57 17.33 3.88.27 10.28.36 10.28.36v-31.02s-7.74-.41-12.68-1.67c-11.74-2.99-21.01-14.18-21.82-27.48-.8-13.09-.75-14.85.01-29.83.67-13.22 9.94-24.27 21.73-27.32 4.28-1.11 12.77-1.53 12.77-1.53V0c-.01 0-4.61-.02-10.29.36m541.11 61.27c-7.07-1.56-15.45-2.82-22.84-3.93-5.22-.78-10.15-1.52-12.8-2.11-10.76-2.4-10.7-9.28-10.68-12.32.07-7.58 8.76-12.1 17.35-12.76 1.44-.14 3.17-.24 5.24-.23 2.25.01 4.08.11 5.61.26 11.25.7 17.79 6.53 19.66 10.97.59 1.4.87 2.25.87 2.25h29.99c.03-11.01-5.34-22.01-14.77-30.21C757.72 5.62 745.49.88 732.39.18c-3.4-.18-8.04-.22-11.8-.1-27.21.84-47.88 19.3-48.09 42.93-.18 20.92 13.02 36.89 34.45 41.66 3.7.82 8.89 1.6 14.9 2.5 6.91 1.03 14.74 2.21 20.79 3.55 14.79 3.27 14.72 11.29 14.7 13.92-.09 9.97-9.67 13.29-16.77 14.39-2.43.48-6.11.94-11.3.91-5.39-.03-9.11-.33-11.66-.68-6.14-.65-11.68-3.23-15.68-7.15-2.48-2.43-3.77-4.89-4.68-8.49h-29.94c0 10.77 4.58 21.41 13.05 29.88 11.52 11.52 25.77 15.85 40.73 16.29 4.91.15 6.74.17 12.45.14 14.31-.1 26.14-2.81 37.81-11.61 10.59-7.98 16.25-20.04 16.36-33.41.2-21.76-14.56-37.99-38.5-43.28" fill="#f7242e"></path>
                </svg>
            </div>
        </a>

        <div className="footer-content-center-wrapper">
            <div className="footer-content-center-info-wrapper">
                <div>
                    <div className="footer-spacing-left">
<p><strong>Norlys</strong><br/>Tietgensvej 4<br/>8600 Silkeborg</p>                    </div>
                    <div className="footer-spacing-left">
<p><strong>Kontakt</strong><br/>Tlf.: <a href="tel:+4570115000">7011 5000</a></p>
<p>&nbsp;</p>                    </div>
                    <div className="footer-spacing-left">
                    </div>
                </div>

                

            </div>
            <div className="u-constrain footer-content-right-wrapper">
                    <div className="footer-link-wrapper Grid">
                            <div className="footer-link Grid-cell u-md-span-1of4">
                                <button id="footer-accordion-toggle-Produkter" className="footer-accordion" aria-expanded="false" type="button">

                                    <div className="u-sansSerif20Bd">Produkter</div>
                                    <div id="footer-accordion-icon-Produkter" className="footer-accordion-icon"></div>
                                </button>

                                <ul id="footer-accordion-content-Produkter" className="Accordion-content footer-accordion-hide-list-mobile">
                                        <li><a href="/internet/">Internet</a></li>
                                        <li><a href="/tv/" className="is-active">Tv</a></li>
                                        <li><a href="/el/">El</a></li>
                                        <li><a href="/naturgas/">Gas</a></li>
                                        <li><a href="/telefoni/">Telefoni</a></li>
                                        <li><a href="/opladning/">Opladning</a></li>
                                        <li><a href="/smarthome/">SmartHome</a></li>
                                        <li><a href="/erhverv/energi/energioptimering/">Energioptimering</a></li>
                                </ul>
                            </div>
                            <div className="footer-link Grid-cell u-md-span-1of4">
                                <button id="footer-accordion-toggle-Om Norlys" className="footer-accordion" aria-expanded="false" type="button">

                                    <div className="u-sansSerif20Bd">Om Norlys</div>
                                    <div id="footer-accordion-icon-Om Norlys" className="footer-accordion-icon"></div>
                                </button>

                                <ul id="footer-accordion-content-Om Norlys" className="Accordion-content footer-accordion-hide-list-mobile">
                                        <li><a href="/job/">Job</a></li>
                                        <li><a href="/om-norlys/presse/">Presse</a></li>
                                        <li><a href="/om-norlys/organisationen/">Organisationen</a></li>
                                        <li><a href="/om-norlys/andelsselskabet/">Andelsselskabet</a></li>
                                        <li><a href="/om-norlys/">Hvem er Norlys?</a></li>
                                        <li><a href="https://se.whistleblowernetwork.net/FrontPages/Default.aspx" target="_blank">Whistleblower-ordning</a></li>
                                        <li><a href="/om-norlys/vaekstpulje/">Norlys Vækstpulje</a></li>
                                </ul>
                            </div>
                            <div className="footer-link Grid-cell u-md-span-1of4">
                                <button id="footer-accordion-toggle-Kundeservice" className="footer-accordion" aria-expanded="false" type="button">

                                    <div className="u-sansSerif20Bd">Kundeservice</div>
                                    <div id="footer-accordion-icon-Kundeservice" className="footer-accordion-icon"></div>
                                </button>

                                <ul id="footer-accordion-content-Kundeservice" className="Accordion-content footer-accordion-hide-list-mobile">
                                        <li><a href="/kundeservice/el/">El</a></li>
                                        <li><a href="/kundeservice/naturgas/">Gas</a></li>
                                        <li><a href="/kundeservice/smarthome/">SmartHome</a></li>
                                        <li><a href="/kundeservice/">Find hjælp</a></li>
                                        <li><a href="/flytning/">Meld flytning</a></li>
                                </ul>
                            </div>
                    </div>

                <div className="footer-content-button-links-wrapper">
                    <div>
                            <a className="Footer-icon" href="https://www.facebook.com/NorlysDK" target="_blank">
                                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="none">
                                        <path d="M-1225-549H151V89h-1376z"></path>
                                        <path d="M13.333 5.833H11.73c-.513 0-.897.21-.897.741V7.5h2.5l-.198 2.5h-2.302v6.667h-2.5V10H6.667V7.5h1.666V5.898c0-1.686.887-2.565 2.884-2.565h2.116v2.5zM4.167 0A4.167 4.167 0 000 4.167v11.666C0 18.134 1.866 20 4.167 20h11.666A4.167 4.167 0 0020 15.833V4.167C20 1.866 18.135 0 15.833 0H4.167z" fill="currentColor"></path>
                                    </g>
                                </svg>
                            </a>

                            <a className="Footer-icon footer-icon-spacing" href="https://www.linkedin.com/company/norlys-dk/" target="_blank">
                                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="none">
                                        <path d="M-1173-549H203V89h-1376z"></path>
                                        <path d="M16.667 15.833h-2.5v-4.67c0-2.806-3.334-2.594-3.334 0v4.67h-2.5V6.667h2.5v1.47c1.164-2.155 5.834-2.314 5.834 2.064v5.632zM5.417 5.61a1.465 1.465 0 01-1.459-1.47c0-.812.654-1.47 1.459-1.47.806 0 1.458.658 1.458 1.47 0 .812-.652 1.47-1.458 1.47zm-1.25 10.223h2.5V6.667h-2.5v9.166zM15.833 0H4.167A4.167 4.167 0 000 4.167v11.666C0 18.134 1.866 20 4.167 20h11.666A4.167 4.167 0 0020 15.833V4.167C20 1.866 18.135 0 15.833 0z" fill="currentColor"></path>
                                    </g>
                                </svg>
                            </a>
                    </div>
                </div>
            </div>
        </div>

            <div className="u-sansSerif14 u-textGrey footer-dotted-line">
                <div className="bottom-footer-wrapper">

                <div className="footer-flex">
                    <div className="footer-bottom-contact-info">Norlys</div>
                    <div className="footer-bottom-contact-info">CVR 26382645</div>
                    <div className="footer-bottom-contact-info">Tietgensvej 4, 8600 Silkeborg</div>
                    <a className="footer-bottom-phone-number" href="tel:7011 5000"> Tlf. 7011 5000</a>
                </div>
                <div className="footer-bottom-end">
                                            <a className="footer-bottom-links" href="/persondatapolitik/"> Persondatapolitik</a>
                                            <a className="footer-bottom-links" href="/cookiepolitik/">  Cookies</a>
                                    </div>
                </div>
            </div>
        </div>
</footer>
)