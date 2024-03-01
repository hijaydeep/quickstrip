"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Lqs = () => {

    const imagePaths = [
        '/img/lqs.png',
        '/img/lidocaine-video-thumbnail.png'
    ];

    const [activeImage, setActiveImage] = useState(imagePaths[0]);
    const [activeTab, setActiveTab] = useState('1');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [viewportHeight, setViewportHeight] = useState('640px');
    const [imageWidth, setImageWidth] = useState('640px');

    useEffect(() => {
        const baseHeight = 347.188;
        const baseWidth = 347.188;

        const handleResize = () => {
            let newHeight, newWidth;

            if (window.innerWidth < 938) {
                newHeight = `calc(100vw - 70px)`;
                newWidth = `calc(100vw - 70px)`;
            } else {
                // newHeight = `calc(${baseHeight + 0.396 * (window.innerWidth - 938)}px)`;
                // newWidth = `calc(${baseWidth + 0.396 * (window.innerWidth - 938)}px)`;

                newHeight = baseHeight + 0.396 * (window.innerWidth - 938);
                newWidth = baseWidth + 0.396 * (window.innerWidth - 938);

                newHeight = Math.min(newHeight, 640);
                newWidth = Math.min(newWidth, 640);
            }

            setViewportHeight(newHeight);
            setImageWidth(newWidth);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleImageClick = (path) => {
        setActiveImage(path);
    };

    const handleModal = () => {
        setIsModalOpen(true);
    }

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains("modal")) {
            setIsModalOpen(false);
        }
    };

    return (
        <>
            <div className='woocommerce product-template-default single single-product postid-232 wp-custom-logo theme-phlox woocommerce-page woocommerce-js elementor-default elementor-kit-69 phlox aux-full-width aux-resp aux-s-fhd aux-top-sticky aux-page-animation-off _auxels aux-dom-ready e--ua-blink e--ua-chrome e--ua-webkit'>
                <main id="main" className="aux-main aux-territory  aux-single aux-boxed-container aux-content-top-margin no-sidebar aux-sidebar-style-border aux-user-entry">
                    <div className="aux-wrapper">
                        <div className="aux-container aux-fold">
                            <div id="primary" className="aux-primary">
                                <div className="content" role="main">
                                    <div className="woocommerce-notices-wrapper" />
                                    <div id="product-232" className="product type-product post-232 status-publish first instock product_cat-dental has-post-thumbnail shipping-taxable purchasable product-type-variable has-default-attributes">
                                        <div className="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images" data-columns={4} style={{ opacity: 1, transition: 'opacity .25s ease-in-out' }}>
                                            <div className="flex-viewport" style={{ overflow: 'hidden', position: 'relative', height: viewportHeight }}>
                                                <div className="woocommerce-product-gallery__wrapper" style={{ width: '800%', transitionDuration: '0s', transform: 'translate3d(0px, 0px, 0px)' }}>
                                                    {activeImage === '/img/lqs.png' && (
                                                        <div className={`woocommerce-product-gallery__image ${activeImage ? 'flex-active-slide' : ''}`} style={{ width: imageWidth, marginRight: '0px', float: 'left', display: 'block' }}>
                                                            <>
                                                                <img
                                                                    width={600}
                                                                    height={600}
                                                                    src="/img/lqs.png"
                                                                    className="wp-post-image"
                                                                    alt="Xylistrip"
                                                                    title="Quickstrip Xylistrip"
                                                                />
                                                                <span className="wpcpv-item wpcpv-item-image">
                                                                    <img width="600" height="600" src="/img/lqs.png" alt="" />
                                                                </span>
                                                            </>
                                                        </div>
                                                    )}
                                                    {activeImage === '/img/lidocaine-video-thumbnail.png' && (
                                                        <div className={`woocommerce-product-gallery__image ${activeImage ? 'flex-active-slide' : ''}`} style={{ width: imageWidth, marginRight: '0px', float: 'left', display: 'block', position: 'relative', overflow: 'hidden' }}>
                                                            <>
                                                                <img
                                                                    width={600}
                                                                    height={400}
                                                                    src="/img/Lidocaine-Thumbnail.png"
                                                                    className="wp-post-image"
                                                                    alt="Xylistrip Video"
                                                                    title="Xylitol Video Thumbnail"
                                                                />
                                                                <span className="wpcpv-item wpcpv-item-video my-class" data-src="https://youtu.be/cwsvZL-eMU8" onClick={handleModal}>
                                                                    <img width="899" height="600" src="/Lidocaine-Thumbnail.png" alt="" />
                                                                </span>
                                                            </>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <ol className="flex-control-nav flex-control-thumbs">
                                                {imagePaths.map((path, index) => (
                                                    <li key={index} className={path === '/img/lidocaine-video-thumbnail.png' ? 'wpcpv-thumb-video' : ''}>
                                                        <img
                                                            onLoad={(e) => {
                                                                e.target.width = e.target.naturalWidth;
                                                                e.target.height = e.target.naturalHeight;
                                                            }}
                                                            src={path}
                                                            alt={`Image ${index}`}
                                                            className={activeImage === path ? 'flex-active' : ''}
                                                            draggable="false"
                                                            width={100}
                                                            height={100}
                                                            onClick={() => handleImageClick(path)}
                                                        />
                                                        {path === '/img/lidocaine-video-thumbnail.png' && (
                                                            <span className="wpcpv-item wpcpv-item-video my-class" data-src="https://youtu.be/cwsvZL-eMU8">
                                                                <img width="899" height="600" src='/img/lidocaine-video-thumbnail.png' alt="video" />
                                                            </span>
                                                        )}
                                                    </li>
                                                ))}
                                            </ol>
                                        </div>
                                        {isModalOpen && (
                                            <div
                                                className="modal fade show d-flex align-items-center"
                                                tabIndex="-1"
                                                onClick={handleOverlayClick}
                                                style={{
                                                    display: "block",
                                                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                                                }}
                                            >
                                                <div
                                                    className="modal-dialog modal-dialog-centered"
                                                    onClick={(e) => e.stopPropagation()}
                                                    style={{
                                                        margin: "auto",
                                                        minWidth: window.innerWidth > 800 ? "60%" : "100%",
                                                    }}
                                                >
                                                    <div
                                                        className="modal-content"
                                                        style={{
                                                            border: "none",
                                                            background: "transparent",
                                                            minHeight: "50vh",
                                                        }}
                                                    >
                                                        <div className="modal-body">
                                                            <div className="embed-responsive embed-responsive-16by9">
                                                                <iframe
                                                                    className="embed-responsive-item"
                                                                    allowFullScreen
                                                                    title="YouTube Video"
                                                                    src="https://www.youtube.com/embed/cwsvZL-eMU8"
                                                                ></iframe>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        <div className="summary entry-summary">
                                            <h1 className="product_title entry-title">XyliStrip</h1>

                                            <p className="price">
                                                <span className="woocommerce-Price-amount amount"><bdi>
                                                    <span className="woocommerce-Price-currencySymbol">$</span>25.00</bdi>
                                                </span>
                                            </p>
                                            <div className="woocommerce-product-details__short-description">
                                                <p style={{ height: 'auto', maxWidth: 'none', marginTop: '0px' }}>
                                                    <strong>Available size: 28 per pack</strong><br />
                                                    <strong>Flavour: Peach</strong>
                                                </p>
                                                <p style={{ height: 'auto', maxWidth: 'none' }}>Xylitol Oral Dissolving Thin Film Strip</p>
                                                <ul style={{ marginLeft: '34px' }}>
                                                    <li>Stimulates saliva production to relieve dry mouth</li>
                                                    <li>Helps reduce the incidence of cavities</li>
                                                </ul>
                                                <p style={{ overflow: 'visible' }}>
                                                    <Link href="https://www.henryschein.ca/ca-en/Shopping/Products.aspx?productid=9401174,9401175" id="btn-add-to-cart" target="_blank" rel="noopener">Buy Now</Link>
                                                </p>
                                            </div>
                                            <form className="variations_form cart" action="https://quickstripdental.com/product/xylistrip/" method="post" encType="multipart/form-data" data-product_id={232}>
                                                <table className="variations" cellSpacing={0} role="presentation">
                                                    <tbody>
                                                        <tr>
                                                            <th className="label">
                                                                <label htmlFor="size">Size</label>
                                                            </th>
                                                            <td className="value">
                                                                <select id="size" name="attribute_size" data-attribute_name="attribute_size" data-show_option_none="yes">
                                                                    <option value>Choose an option</option>
                                                                    <option value="28 per pack" defaultValue>28 per pack</option>
                                                                </select>
                                                                <Link className="reset_variations" href="#">Clear</Link>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className="single_variation_wrap">
                                                    <div className="woocommerce-variation single_variation" />
                                                    <div className="woocommerce-variation-add-to-cart variations_button">
                                                        <div className="quantity">
                                                            <label className="screen-reader-text" htmlFor="quantity_65cf1bd15f617">XyliStrip quantity</label>
                                                            <input type="number" id="quantity_65cf1bd15f617" className="input-text qty text" name="quantity" defaultValue={1} aria-label="Product quantity" size={4} min={1} step={1} inputMode="numeric" autoComplete="off" />
                                                        </div>
                                                        <button type="submit" className="single_add_to_cart_button button alt">Add to cart</button>
                                                        <input type="hidden" name="add-to-cart" defaultValue={232} />
                                                        <input type="hidden" name="product_id" defaultValue={232} />
                                                        <input type="hidden" name="variation_id" className="variation_id" defaultValue={0} />
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="product_meta">
                                                <span className="sku_wrapper">SKU: <span className="sku">N/A</span></span>
                                                <span className="posted_in">Category: <Link href="#" rel="tag">Dental</Link></span>
                                            </div>
                                        </div>
                                        <div className="woocommerce-tabs wc-tabs-wrapper">
                                            <ul className="tabs wc-tabs" role="tablist">
                                                <li className={`additional_information_tab ${activeTab === '1' ? 'active' : ''}`} id="tab-title-additional_information" role="tab" aria-controls="tab-additional_information">
                                                    <Link href="#tab-additional_information" onClick={() => handleTabClick('1')}>
                                                        Additional information
                                                    </Link>
                                                </li>
                                                <li className={`description_tab ${activeTab === '2' ? 'active' : ''}`} id="tab-title-description" role="tab" aria-controls="tab-advantages-of-the-oral-thin-film-quickstrip">
                                                    <Link href="#tab-advantages-of-the-oral-thin-film-quickstrip" onClick={() => handleTabClick('2')}>
                                                        Description
                                                    </Link>
                                                </li>
                                                <li className={`ingredients-dose_tab ${activeTab === '3' ? 'active' : ''}`} id="tab-title-ingredients-dose" role="tab" aria-controls="tab-ingredients-dose">
                                                    <Link href="#tab-ingredients-dose" onClick={() => handleTabClick('3')}>
                                                        Ingredients &amp; Dose
                                                    </Link>
                                                </li>
                                                <li className={`benefits-of-use-for-patients_tab ${activeTab === '4' ? 'active' : ''}`} id="tab-title-benefits-of-use-for-patients" role="tab" aria-controls="tab-how-does-xylitol-work">
                                                    <Link href="#tab-how-does-xylitol-work" onClick={() => handleTabClick('4')}>
                                                        Benefits of Use for Patients
                                                    </Link>
                                                </li>
                                                <li className={`benefits-for-the-practitioner_tab ${activeTab === '5' ? 'active' : ''}`} id="tab-title-benefits-for-the-practitioner" role="tab" aria-controls="tab-signs-symptoms-causes">
                                                    <Link href="#tab-signs-symptoms-causes" onClick={() => handleTabClick('5')}>
                                                        Benefits for the Practitioner
                                                    </Link>
                                                </li>
                                            </ul>
                                            <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--additional_information panel entry-content wc-tab" id="tab-additional_information" role="tabpanel" aria-labelledby="tab-title-additional_information" style={{ display: activeTab === '1' ? 'block' : 'none' }}>
                                                <h2>Additional information</h2>
                                                <table className="woocommerce-product-attributes shop_attributes">
                                                    <tbody><tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_size">
                                                        <th className="woocommerce-product-attributes-item__label">Size</th>
                                                        <td className="woocommerce-product-attributes-item__value">
                                                            <p>28 per pack</p>
                                                        </td>
                                                    </tr>
                                                    </tbody></table>
                                            </div>
                                            <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--advantages-of-the-oral-thin-film-quickstrip panel entry-content wc-tab" id="tab-advantages-of-the-oral-thin-film-quickstrip" role="tabpanel" aria-labelledby="tab-title-advantages-of-the-oral-thin-film-quickstrip" style={{ display: activeTab === '2' ? 'block' : 'none' }}>
                                                <h2 className="yikes-custom-woo-tab-title yikes-custom-woo-tab-title-advantages-of-the-oral-thin-film-quickstrip">Advantages of the Oral Thin Film QuickStrip™</h2>
                                                <ul>
                                                    <li>The strip adheres to the inside of the cheek, begins to dissolve immediately, stimulating saliva production, aiding in the relief of the symptoms of dry mouth</li>
                                                    <li>The strip can be self administered</li>
                                                    <li>No water or rinsing required</li>
                                                    <li>Packaged in convenient individual single dose foils</li>
                                                    <li>Discreet and easy to use</li>
                                                </ul>
                                            </div>
                                            <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--ingredients-dose panel entry-content wc-tab" id="tab-ingredients-dose" role="tabpanel" aria-labelledby="tab-title-ingredients-dose" style={{ display: activeTab === '3' ? 'block' : 'none' }}>
                                                <h2 className="yikes-custom-woo-tab-title yikes-custom-woo-tab-title-ingredients-dose">Ingredients &amp; Dose</h2>
                                                <p style={{ height: 'auto', maxWidth: 'none', marginTop: '0px' }}><strong>Ingredients:</strong></p>
                                                <ul>
                                                    <li style={{ height: 'auto', maxWidth: 'none' }}>Xylitol</li>
                                                    <li style={{ height: 'auto', maxWidth: 'none' }}>Pullulan</li>
                                                    <li style={{ height: 'auto', maxWidth: 'none' }}>MCT Oil</li>
                                                    <li style={{ height: 'auto', maxWidth: 'none' }}>Flavour</li>
                                                    <li style={{ height: 'auto', maxWidth: 'none' }}>Polysorbate 80</li>
                                                </ul>
                                                <p style={{ height: 'auto', marginTop: '0px', marginBottom: '0px' }}><strong>Dose:</strong> </p>
                                                <ul>
                                                    <li style={{ height: 'auto', maxWidth: 'none' }}>30mg Xylitol per strip</li>
                                                </ul>
                                            </div>
                                            <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--how-does-xylitol-work panel entry-content wc-tab" id="tab-how-does-xylitol-work" role="tabpanel" aria-labelledby="tab-title-how-does-xylitol-work" style={{ display: activeTab === '4' ? 'block' : 'none' }}>
                                                <h2 className="yikes-custom-woo-tab-title yikes-custom-woo-tab-title-how-does-xylitol-work">How Does Xylitol Work?</h2>
                                                <ul>
                                                    <li>Xylitol prevents caries in several ways. First, it interferes with the bacteria’s ability to produce acid. Second, it blocks communication between bacteria, so they stop producing the polysaccharide slime that holds the biofilm together and third, it raises the pH of the mouth and improves salivary flow.</li>
                                                    <li>Cariogenic bacteria prefer living in a low pH environment and produce the acid that demineralizes enamel. In the presence of xylitol, the bacteria stop producing acid and the polysaccharide slime and simply slide off the teeth. In the presence of sugar, bacteria thrive, produce acid, and stick to the teeth.</li>
                                                    <li>Bacterial numbers are significantly reduced in the presence of xylitol as it promotes an oral environment which is conducive to better oral health.</li>
                                                </ul>
                                            </div>
                                            <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--signs-symptoms-causes panel entry-content wc-tab" id="tab-signs-symptoms-causes" role="tabpanel" aria-labelledby="tab-title-signs-symptoms-causes" style={{ display: activeTab === '5' ? 'block' : 'none' }}>
                                                <h2 className="yikes-custom-woo-tab-title yikes-custom-woo-tab-title-signs-symptoms-causes">Signs, Symptoms &amp; Causes</h2>
                                                <ul>
                                                    <li>Individuals with xerostomia often complain of problems with eating, speaking, swallowing, and wearing dentures. Dry, crumbly foods, such as cereals and crackers may be particularly difficult to chew and swallow.</li>
                                                    <li>Xerostomia affects 25% of the population and is becoming one of the fastest growing oral health problems in North America, increased risk for rampant dental caries.  Smoking can potentiate this problem greatly.</li>
                                                    <li>Medications are the cause of more than 90% of xerostomia cases. It is estimated over 500 medications can contribute.  The main contributors are antihistamines, antidepressants, anticholinergics, anorexiants, antihypertensives, antipsychotics, anti-Parkinson agents, diuretics, and sedatives.</li>
                                                    <li>Other drug classes that commonly cause xerostomia include antiemetics and antianxiety agents, decongestants, analgesics, antidiarrheals, bronchodilators and skeletal muscle relaxants.</li>
                                                    <li>It should be noted that, while there are many drugs that affect the quantity and/or quality of saliva, these effects are generally not permanent.</li>
                                                    <li>Symptoms of xerostomia are often worse between meals, at night and in the morning.</li>
                                                    <li>Denture wearers may have problems with denture retention, denture sores and the tongue sticking to the palate</li>
                                                    <li>Patients with xerostomia often complain of taste disorders (dysgeusia), a painful tongue (glossodynia) and an increased need to drink water, especially at night.</li>
                                                    <li>Xerostomia can lead to markedly increased dental caries, parotid gland enlargement, inflammation, and fissuring of the lips (cheilitis), inflammation or ulcers of the tongue and buccal mucosa, oral candidiasis, salivary gland infection (sialadenitis), halitosis (bad breath), and cracking and fissuring of the oral mucosa.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <section className="related products">
                                            <h2>Related products</h2>
                                            <ul className="products columns-4">
                                                <li className="product type-product post-232 status-publish first instock product_cat-dental has-post-thumbnail shipping-taxable purchasable product-type-variable has-default-attributes">
                                                    <Link href="/product/xylistrip" className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                        <img width="300" height="300" src="/img/xylitol.png" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Lidocaine" decoding="async" />
                                                    </Link>
                                                    <Link href="/product/xylistrip">
                                                        <h2 className="woocommerce-loop-product__title">XyliStrip</h2>
                                                    </Link>
                                                    <span className="price">
                                                        <span className="woocommerce-Price-amount amount"><bdi>
                                                            <span className="woocommerce-Price-currencySymbol">$</span>25.00</bdi>
                                                        </span>
                                                    </span>
                                                    <Link href="/product/xylistrip" data-quantity={1} className="button product_type_variable add_to_cart_button" data-product_id={274} data-product_sku aria-label="Select options for “LQS - Lidocaine”" aria-describedby="This product has multiple variants. The options may be chosen on the product page" rel="nofollow" data-product-type="variable" data-verify_nonce="76f6e55753">Select options</Link>
                                                </li>
                                            </ul>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default Lqs;