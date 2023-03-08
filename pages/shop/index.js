import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function Index() {
  return (
    <div className="explore">
      <Navbar id={2} />
      <div className="explore-content">
        <div className="explore-title">A world of thoughts.</div>
        <div className="explore-description">
          Explore great works and artists.
        </div>
        <div className="explore-grid">
          <div className="explore-grid-cell">
            <div className="explore-area">
              <div className="explore-area-title">charts</div>
              <div className="explore-area-content">
                <div className="product product-duo">
                  <div className="product-content">
                    <div className="product-info">
                      <div className="product-title">Top Authors</div>
                      <div className="product-description">
                        Thinkers, creators, dreamers.
                      </div>
                    </div>
                    <div className="product-link">
                      <Link href={"/"}>
                        Explore <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="product product-duo">
                  <div className="product-content">
                    <div className="product-info">
                      <div className="product-title">Top Articles</div>
                      <div className="product-description">
                        Which posts shocked the world?
                      </div>
                    </div>
                    <div className="product-link">
                      <Link href={"/"}>
                        Explore <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="explore-grid-cell">
            <div className="explore-area">
              <div className="explore-area-title">Education</div>
              <div className="explore-area-content">
                <div className="product">
                  <div className="product-content">
                    <div className="product-info">
                      <div className="product-title">Biology</div>
                      <div className="product-description"></div>
                    </div>
                    <div className="product-link">
                      <Link href={"/"}>
                        Explore <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <div className="product-content">
                    <div className="product-info">
                      <div className="product-title">Computer science</div>
                      <div className="product-description"></div>
                    </div>
                    <div className="product-link">
                      <Link href={"/"}>
                        Explore <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <div className="product-content">
                    <div className="product-info">
                      <div className="product-title">Economy</div>
                      <div className="product-description"></div>
                    </div>
                    <div className="product-link">
                      <Link href={"/"}>
                        Explore <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <div className="product-content">
                    <div className="product-info">
                      <div className="product-title">History</div>
                      <div className="product-description"></div>
                    </div>
                    <div className="product-link">
                      <Link href={"/"}>
                        Explore <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <div className="product-content">
                    <div className="product-info">
                      <div className="product-title">Philosophy</div>
                      <div className="product-description"></div>
                    </div>
                    <div className="product-link">
                      <Link href={"/"}>
                        Explore <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <div className="product-content">
                    <div className="product-info">
                      <div className="product-title">Physics</div>
                      <div className="product-description"></div>
                    </div>
                    <div className="product-link">
                      <Link href={"/"}>
                        Explore <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <div className="product-content">
                    <div className="product-info">
                      <div className="product-title">Psychology</div>
                      <div className="product-description"></div>
                    </div>
                    <div className="product-link">
                      <Link href={"/"}>
                        Explore <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <div className="product-content">
                    <div className="product-info">
                      <div className="product-title">Sports</div>
                      <div className="product-description"></div>
                    </div>
                    <div className="product-link">
                      <Link href={"/"}>
                        Explore <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="explore-grid-cell">
            <div className="explore-area">
              <div className="explore-area-title">Non-Fiction</div>
              <div className="explore-area-content">
                <div className="product">
                  <div className="product-content">
                    <div className="product-info">
                      <div className="product-title">Biography</div>
                      <div className="product-description"></div>
                    </div>
                    <div className="product-link">
                      <Link href={"/"}>
                        Explore <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <div className="product-content">
                    <div className="product-info">
                      <div className="product-title">Business</div>
                      <div className="product-description"></div>
                    </div>
                    <div className="product-link">
                      <Link href={"/"}>
                        Explore <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <div className="product-content">
                    <div className="product-info">
                      <div className="product-title">Finances</div>
                      <div className="product-description"></div>
                    </div>
                    <div className="product-link">
                      <Link href={"/"}>
                        Explore <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <div className="product-content">
                    <div className="product-info">
                      <div className="product-title">Lifestyle</div>
                      <div className="product-description"></div>
                    </div>
                    <div className="product-link">
                      <Link href={"/"}>
                        Explore <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <div className="product-content">
                    <div className="product-info">
                      <div className="product-title">Mental health</div>
                      <div className="product-description"></div>
                    </div>
                    <div className="product-link">
                      <Link href={"/"}>
                        Explore <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <div className="product-content">
                    <div className="product-info">
                      <div className="product-title">Mindset</div>
                      <div className="product-description"></div>
                    </div>
                    <div className="product-link">
                      <Link href={"/"}>
                        Explore <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="explore-grid-cell">
            <div className="explore-area">
              <div className="explore-area-title">Fiction</div>
              <div className="explore-area-content">
                <div className="product">
                  <div className="product-content">
                    <div className="product-info">
                      <div className="product-title">Fantasy</div>
                      <div className="product-description"></div>
                    </div>
                    <div className="product-link">
                      <Link href={"/"}>
                        Explore <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <div className="product-content">
                    <div className="product-info">
                      <div className="product-title">Horror</div>
                      <div className="product-description"></div>
                    </div>
                    <div className="product-link">
                      <Link href={"/"}>
                        Explore <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <div className="product-content">
                    <div className="product-info">
                      <div className="product-title">Manga</div>
                      <div className="product-description"></div>
                    </div>
                    <div className="product-link">
                      <Link href={"/"}>
                        Explore <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <div className="product-content">
                    <div className="product-info">
                      <div className="product-title">Mythology</div>
                      <div className="product-description"></div>
                    </div>
                    <div className="product-link">
                      <Link href={"/"}>
                        Explore <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <div className="product-content">
                    <div className="product-info">
                      <div className="product-title">Novels</div>
                      <div className="product-description"></div>
                    </div>
                    <div className="product-link">
                      <Link href={"/"}>
                        Explore <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <div className="product-content">
                    <div className="product-info">
                      <div className="product-title">Romantic</div>
                      <div className="product-description"></div>
                    </div>
                    <div className="product-link">
                      <Link href={"/"}>
                        Explore <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
