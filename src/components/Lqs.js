"use client";
import React, { useState } from 'react';

const Lqs = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 4;

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
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
                                            <div className="flex-viewport" style={{ overflow: 'hidden', position: 'relative', height: '640px' }}>
                                                <div className="woocommerce-product-gallery__wrapper" style={{ width: '800%', transitionDuration: '0s', transform: 'translate3d(0px, 0px, 0px)' }}>
                                                    <div data-thumb="/img/xylitol.png" data-thumb-alt="Xylistrip" className="woocommerce-product-gallery__image" style={{ width: '640px', marginRight: '0px', float: 'left', display: 'block' }}>
                                                        <img width={600} height={600} src="/img/xylitol.png" className="wp-post-image" alt="Xylistrip" title="Quickstrip Xylistrip" data-caption data-src="https://quickstripdental.com/wp-content/uploads/2022/10/Quickstrip-Xylistrip-Product.webp" data-large_image="https://quickstripdental.com/wp-content/uploads/2022/10/Quickstrip-Xylistrip-Product.webp" data-large_image_width={600} data-large_image_height={600} decoding="async" srcSet="https://quickstripdental.com/wp-content/uploads/2022/10/Quickstrip-Xylistrip-Product.webp 600w, https://quickstripdental.com/wp-content/uploads/2022/10/Quickstrip-Xylistrip-Product-300x300.webp 300w, https://quickstripdental.com/wp-content/uploads/2022/10/Quickstrip-Xylistrip-Product-150x150.webp 150w, https://quickstripdental.com/wp-content/uploads/2022/10/Quickstrip-Xylistrip-Product-200x200.webp 200w, https://quickstripdental.com/wp-content/uploads/2022/10/Quickstrip-Xylistrip-Product-100x100.webp 100w, https://quickstripdental.com/wp-content/uploads/2022/10/Quickstrip-Xylistrip-Product-90x90.webp 90w" sizes="(max-width: 600px) 100vw, 600px" />
                                                        <span className="wpcpv-item wpcpv-item-image" data-src="https://quickstripdental.com/wp-content/uploads/2022/10/Quickstrip-Xylistrip-Product.webp">
                                                            <img width="600" height="600" src="/img/xylitol.png" alt="" />
                                                        </span>
                                                    </div>
                                                    {/* <div data-thumb="https://quickstripdental.com/wp-content/uploads/2022/10/xylitol-fron-100x100.webp" data-thumb-alt="xylitol-front" className="woocommerce-product-gallery__image" style={{ width: '640px', marginRight: '0px', float: 'left', display: 'block' }}>
                                                <img width={600} height={600} src="/img/xylitol-front.png" className alt="xylitol-front" title="xylitol-front" data-caption data-src="https://quickstripdental.com/wp-content/uploads/2022/10/xylitol-fron.webp" data-large_image="https://quickstripdental.com/wp-content/uploads/2022/10/xylitol-fron.webp" data-large_image_width={600} data-large_image_height={600} decoding="async" srcSet="https://quickstripdental.com/wp-content/uploads/2022/10/xylitol-fron.webp 600w, https://quickstripdental.com/wp-content/uploads/2022/10/xylitol-fron-300x300.webp 300w, https://quickstripdental.com/wp-content/uploads/2022/10/xylitol-fron-150x150.webp 150w, https://quickstripdental.com/wp-content/uploads/2022/10/xylitol-fron-200x200.webp 200w, https://quickstripdental.com/wp-content/uploads/2022/10/xylitol-fron-100x100.webp 100w, https://quickstripdental.com/wp-content/uploads/2022/10/xylitol-fron-90x90.webp 90w" sizes="(max-width: 600px) 100vw, 600px" />
                                                <span className="wpcpv-item wpcpv-item-image" data-src="https://quickstripdental.com/wp-content/uploads/2022/10/xylitol-fron.webp">
                                                    <img width="600" height="600" src="/img/xylitol-front.png" alt="" />
                                                </span>
                                            </div>
                                            <div data-thumb="https://quickstripdental.com/wp-content/uploads/2022/10/xylitol-back-100x100.webp" data-thumb-alt="xylitol-back" className="woocommerce-product-gallery__image" style={{ width: '640px', marginRight: '0px', float: 'left', display: 'block' }}>
                                                <img width={600} height={600} src="/img/xylitol-back.png" className alt="xylitol-back" title="xylitol-back" data-caption data-src="https://quickstripdental.com/wp-content/uploads/2022/10/xylitol-back.webp" data-large_image="https://quickstripdental.com/wp-content/uploads/2022/10/xylitol-back.webp" data-large_image_width={600} data-large_image_height={600} decoding="async" srcSet="https://quickstripdental.com/wp-content/uploads/2022/10/xylitol-back.webp 600w, https://quickstripdental.com/wp-content/uploads/2022/10/xylitol-back-300x300.webp 300w, https://quickstripdental.com/wp-content/uploads/2022/10/xylitol-back-150x150.webp 150w, https://quickstripdental.com/wp-content/uploads/2022/10/xylitol-back-200x200.webp 200w, https://quickstripdental.com/wp-content/uploads/2022/10/xylitol-back-100x100.webp 100w, https://quickstripdental.com/wp-content/uploads/2022/10/xylitol-back-90x90.webp 90w" sizes="(max-width: 600px) 100vw, 600px" />
                                                <span className="wpcpv-item wpcpv-item-image" data-src="https://quickstripdental.com/wp-content/uploads/2022/10/xylitol-back.webp">
                                                    <img width="600" height="600" src="/img/xylitol-back.png" alt="" />
                                                </span>
                                            </div>
                                            <div data-thumb="https://quickstripdental.com/wp-content/uploads/2022/10/Xylitol-Video-Thumbnail-100x100.webp" data-thumb-alt className="woocommerce-product-gallery__image" style={{ width: '640px', marginRight: '0px', float: 'left', display: 'block' }}>
                                                <img width={600} height={400} src="/img/Xylitol-Video-Thumbnail.png" className alt="" title="Xylitol Video Thumbnail" data-caption data-src="https://quickstripdental.com/wp-content/uploads/2022/10/Xylitol-Video-Thumbnail.webp" data-large_image="https://quickstripdental.com/wp-content/uploads/2022/10/Xylitol-Video-Thumbnail.webp" data-large_image_width={899} data-large_image_height={600} decoding="async" srcSet="https://quickstripdental.com/wp-content/uploads/2022/10/Xylitol-Video-Thumbnail-600x400.webp 600w, https://quickstripdental.com/wp-content/uploads/2022/10/Xylitol-Video-Thumbnail-135x90.webp 135w, https://quickstripdental.com/wp-content/uploads/2022/10/Xylitol-Video-Thumbnail.webp 899w" sizes="(max-width: 600px) 100vw, 600px" />
                                                <span className="wpcpv-item wpcpv-item-video" data-src="https://youtu.be/cwsvZL-eMU8">
                                                    <img width="899" height="600" src="/img/Xylitol-Video-Thumbnail.png" alt="" />
                                                </span>
                                            </div> */}
                                                </div>
                                            </div>
                                        </div>
                                        <ol className="flex-control-nav flex-control-thumbs">
                                            <li>
                                                <img onLoad="this.width = this.naturalWidth; this.height = this.naturalHeight" src="/img/xylitol.png" alt="Xylistrip" className="flex-active" draggable="false" width={100} height={100} />
                                            </li>
                                            <li>
                                                <img onLoad="this.width = this.naturalWidth; this.height = this.naturalHeight" src="/img/xylitol-front.png" alt="xylitol-front" draggable="false" width={100} height={100} />
                                            </li>
                                            <li>
                                                <img onLoad="this.width = this.naturalWidth; this.height = this.naturalHeight" src="/img/xylitol-back.png" alt="xylitol-back" draggable="false" width={100} height={100} />
                                            </li>
                                            <li className="wpcpv-thumb-video">
                                                <img onLoad="this.width = this.naturalWidth; this.height = this.naturalHeight" src="/img/Xylitol-Video-Thumbnail.png" draggable="false" width={100} height={100} />
                                                <span className="wpcpv-item wpcpv-item-video my-class" data-src="https://youtu.be/cwsvZL-eMU8">
                                                    <img width="899" height="600" src="/img/Xylitol-Video-Thumbnail.png" alt="" />
                                                </span>
                                            </li>
                                        </ol>
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
                                                <p style={{ overflow: 'visible !important' }}>
                                                    <a href="https://www.henryschein.ca/ca-en/Shopping/Products.aspx?productid=9401174,9401175" id="btn-add-to-cart" target="_blank" rel="noopener">Buy Now</a>
                                                </p>
                                            </div>
                                            <form className="variations_form cart" action="https://quickstripdental.com/product/xylistrip/" method="post" encType="multipart/form-data" data-product_id={232} data-product_variations="[{&quot;attributes&quot;:{&quot;attribute_size&quot;:&quot;28 per pack&quot;},&quot;availability_html&quot;:&quot;&quot;,&quot;backorders_allowed&quot;:false,&quot;dimensions&quot;:{&quot;length&quot;:&quot;&quot;,&quot;width&quot;:&quot;&quot;,&quot;height&quot;:&quot;&quot;},&quot;dimensions_html&quot;:&quot;N\/A&quot;,&quot;display_price&quot;:25,&quot;display_regular_price&quot;:25,&quot;image&quot;:{&quot;title&quot;:&quot;Quickstrip Xylistrip&quot;,&quot;caption&quot;:&quot;&quot;,&quot;url&quot;:&quot;https:\/\/quickstripdental.com\/wp-content\/uploads\/2022\/10\/Quickstrip-Xylistrip-Product.webp&quot;,&quot;alt&quot;:&quot;Xylistrip&quot;,&quot;src&quot;:&quot;https:\/\/quickstripdental.com\/wp-content\/uploads\/2022\/10\/Quickstrip-Xylistrip-Product.webp&quot;,&quot;srcSet&quot;:&quot;https:\/\/quickstripdental.com\/wp-content\/uploads\/2022\/10\/Quickstrip-Xylistrip-Product.webp 600w, https:\/\/quickstripdental.com\/wp-content\/uploads\/2022\/10\/Quickstrip-Xylistrip-Product-300x300.webp 300w, https:\/\/quickstripdental.com\/wp-content\/uploads\/2022\/10\/Quickstrip-Xylistrip-Product-150x150.webp 150w, https:\/\/quickstripdental.com\/wp-content\/uploads\/2022\/10\/Quickstrip-Xylistrip-Product-200x200.webp 200w, https:\/\/quickstripdental.com\/wp-content\/uploads\/2022\/10\/Quickstrip-Xylistrip-Product-100x100.webp 100w, https:\/\/quickstripdental.com\/wp-content\/uploads\/2022\/10\/Quickstrip-Xylistrip-Product-90x90.webp 90w&quot;,&quot;sizes&quot;:&quot;(max-width: 600px) 100vw, 600px&quot;,&quot;full_src&quot;:&quot;https:\/\/quickstripdental.com\/wp-content\/uploads\/2022\/10\/Quickstrip-Xylistrip-Product.webp&quot;,&quot;full_src_w&quot;:600,&quot;full_src_h&quot;:600,&quot;gallery_thumbnail_src&quot;:&quot;https:\/\/quickstripdental.com\/wp-content\/uploads\/2022\/10\/Quickstrip-Xylistrip-Product-100x100.webp&quot;,&quot;gallery_thumbnail_src_w&quot;:100,&quot;gallery_thumbnail_src_h&quot;:100,&quot;thumb_src&quot;:&quot;https:\/\/quickstripdental.com\/wp-content\/uploads\/2022\/10\/Quickstrip-Xylistrip-Product-300x300.webp&quot;,&quot;thumb_src_w&quot;:300,&quot;thumb_src_h&quot;:300,&quot;src_w&quot;:600,&quot;src_h&quot;:600},&quot;image_id&quot;:1336,&quot;is_downloadable&quot;:false,&quot;is_in_stock&quot;:true,&quot;is_purchasable&quot;:true,&quot;is_sold_individually&quot;:&quot;no&quot;,&quot;is_virtual&quot;:false,&quot;max_qty&quot;:&quot;&quot;,&quot;min_qty&quot;:1,&quot;price_html&quot;:&quot;&quot;,&quot;sku&quot;:&quot;&quot;,&quot;variation_description&quot;:&quot;&quot;,&quot;variation_id&quot;:1143,&quot;variation_is_active&quot;:true,&quot;variation_is_visible&quot;:true,&quot;weight&quot;:&quot;&quot;,&quot;weight_html&quot;:&quot;N\/A&quot;}]">
                                                <table className="variations" cellSpacing={0} role="presentation">
                                                    <tbody>
                                                        <tr>
                                                            <th className="label">
                                                                <label htmlFor="size">Size</label>
                                                            </th>
                                                            <td className="value">
                                                                <select id="size" className name="attribute_size" data-attribute_name="attribute_size" data-show_option_none="yes">
                                                                    <option value>Choose an option</option>
                                                                    <option value="28 per pack" selected="selected">28 per pack</option>
                                                                </select>
                                                                <a className="reset_variations" href="#">Clear</a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className="single_variation_wrap">
                                                    <div className="woocommerce-variation single_variation" />
                                                    <div className="woocommerce-variation-add-to-cart variations_button">
                                                        <div className="quantity">
                                                            <label className="screen-reader-text" htmlFor="quantity_65cf1bd15f617">XyliStrip quantity</label>
                                                            <input type="number" id="quantity_65cf1bd15f617" className="input-text qty text" name="quantity" defaultValue={1} aria-label="Product quantity" size={4} min={1} max step={1} placeholder inputMode="numeric" autoComplete="off" />
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
                                                <span className="posted_in">Category: <a href="https://quickstripdental.com/product-category/dental/" rel="tag">Dental</a></span>
                                            </div>
                                        </div>
                                        <div className="woocommerce-tabs wc-tabs-wrapper">
                                            <ul className="tabs wc-tabs" role="tablist">
                                                <li className="additional_information_tab" id="tab-title-additional_information" role="tab" aria-controls="tab-additional_information">
                                                    <a href="#tab-additional_information">
                                                        Additional information
                                                    </a>
                                                </li>
                                                <li className="advantages-of-the-oral-thin-film-quickstrip_tab" id="tab-title-advantages-of-the-oral-thin-film-quickstrip" role="tab" aria-controls="tab-advantages-of-the-oral-thin-film-quickstrip">
                                                    <a href="#tab-advantages-of-the-oral-thin-film-quickstrip">
                                                        Advantages of the Oral Thin Film QuickStrip™
                                                    </a>
                                                </li>
                                                <li className="ingredients-dose_tab" id="tab-title-ingredients-dose" role="tab" aria-controls="tab-ingredients-dose">
                                                    <a href="#tab-ingredients-dose">
                                                        Ingredients &amp; Dose
                                                    </a>
                                                </li>
                                                <li className="how-does-xylitol-work_tab" id="tab-title-how-does-xylitol-work" role="tab" aria-controls="tab-how-does-xylitol-work">
                                                    <a href="#tab-how-does-xylitol-work">
                                                        How Does Xylitol Work?
                                                    </a>
                                                </li>
                                                <li className="signs-symptoms-causes_tab" id="tab-title-signs-symptoms-causes" role="tab" aria-controls="tab-signs-symptoms-causes">
                                                    <a href="#tab-signs-symptoms-causes">
                                                        Signs, Symptoms &amp; Causes
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--additional_information panel entry-content wc-tab" id="tab-additional_information" role="tabpanel" aria-labelledby="tab-title-additional_information">
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
                                            <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--advantages-of-the-oral-thin-film-quickstrip panel entry-content wc-tab" id="tab-advantages-of-the-oral-thin-film-quickstrip" role="tabpanel" aria-labelledby="tab-title-advantages-of-the-oral-thin-film-quickstrip">
                                                <h2 className="yikes-custom-woo-tab-title yikes-custom-woo-tab-title-advantages-of-the-oral-thin-film-quickstrip">Advantages of the Oral Thin Film QuickStrip™</h2>
                                                <ul>
                                                    <li>The strip adheres to the inside of the cheek, begins to dissolve immediately, stimulating saliva production, aiding in the relief of the symptoms of dry mouth</li>
                                                    <li>The strip can be self administered</li>
                                                    <li>No water or rinsing required</li>
                                                    <li>Packaged in convenient individual single dose foils</li>
                                                    <li>Discreet and easy to use</li>
                                                </ul>
                                            </div>
                                            <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--ingredients-dose panel entry-content wc-tab" id="tab-ingredients-dose" role="tabpanel" aria-labelledby="tab-title-ingredients-dose">
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
                                            <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--how-does-xylitol-work panel entry-content wc-tab" id="tab-how-does-xylitol-work" role="tabpanel" aria-labelledby="tab-title-how-does-xylitol-work">
                                                <h2 className="yikes-custom-woo-tab-title yikes-custom-woo-tab-title-how-does-xylitol-work">How Does Xylitol Work?</h2>
                                                <ul>
                                                    <li>Xylitol prevents caries in several ways. First, it interferes with the bacteria’s ability to produce acid. Second, it blocks communication between bacteria, so they stop producing the polysaccharide slime that holds the biofilm together and third, it raises the pH of the mouth and improves salivary flow.</li>
                                                    <li>Cariogenic bacteria prefer living in a low pH environment and produce the acid that demineralizes enamel. In the presence of xylitol, the bacteria stop producing acid and the polysaccharide slime and simply slide off the teeth. In the presence of sugar, bacteria thrive, produce acid, and stick to the teeth.</li>
                                                    <li>Bacterial numbers are significantly reduced in the presence of xylitol as it promotes an oral environment which is conducive to better oral health.</li>
                                                </ul>
                                            </div>
                                            <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--signs-symptoms-causes panel entry-content wc-tab" id="tab-signs-symptoms-causes" role="tabpanel" aria-labelledby="tab-title-signs-symptoms-causes">
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
                                                    <a href="https://quickstripdental.com/product/lqs-lidocaine/" className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                                        <img width="300" height="300" src="/img/xylitol.png" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Lidocaine" decoding="async" />
                                                    </a>
                                                    <a href="https://quickstripdental.com/product/lqs-lidocaine/">
                                                        <h2 className="woocommerce-loop-product__title">Hi</h2>
                                                    </a>
                                                    <span className="price">
                                                        <span className="woocommerce-Price-amount amount"><bdi>
                                                            <span className="woocommerce-Price-currencySymbol">$</span>269.00</bdi>
                                                        </span>
                                                    </span>
                                                    <a href="https://quickstripdental.com/product/lqs-lidocaine/" data-quantity={1} className="button product_type_variable add_to_cart_button" data-product_id={274} data-product_sku aria-label="Select options for “LQS - Lidocaine”" aria-describedby="This product has multiple variants. The options may be chosen on the product page" rel="nofollow" data-product-type="variable" data-verify_nonce="76f6e55753">Select options</a>
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