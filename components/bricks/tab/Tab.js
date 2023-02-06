import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ExploreTab({ title, description, link, type }) {
  if (type == 1) {
    return (
      <div className="explore-tab explore-tab-1">
        <div className="explore-tab-content">
          <div className="explore-tab-text">
            <div className="explore-tab-title">
              <h2>{title}</h2>
            </div>
            <div className="explore-tab-description">
              <p>{description}</p>
            </div>
          </div>
          <div className="explore-tab-link">
            <a href={link}>
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
      </div>
    );
  }
  if (type == 2) {
    return (
      <div className="explore-tab explore-tab-2">
        <div className="explore-tab-content">
          <div className="explore-tab-text">
            <div className="explore-tab-title">
              <h2>{title}</h2>
            </div>
            <div className="explore-tab-description">
              <p>{description}</p>
            </div>
          </div>
          <div className="explore-tab-link">
            <a href={link}>
              Learn more <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
      </div>
    );
  }
  if (type == 3) {
    return (
      <div className="explore-tab explore-tab-3">
        <div className="explore-tab-content">
          <div className="explore-tab-text">
            <div className="explore-tab-title">
              <h2>{title}</h2>
            </div>
            <div className="explore-tab-description">
              <p>{description}</p>
            </div>
          </div>
          <div className="explore-tab-link">
            <a href={link}>
              Learn more <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
      </div>
    );
  }
  if (type == 4) {
    return (
      <div className="explore-tab explore-tab-4">
        <div className="explore-tab-content">
          <div className="explore-tab-text">
            <div className="explore-tab-title">
              <h2>{title}</h2>
            </div>
            <div className="explore-tab-description">
              <p>{description}</p>
            </div>
          </div>
          <div className="explore-tab-link">
            <a href={link}>
              Learn more <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
      </div>
    );
  }
  if (type == 5) {
    return (
      <div className="explore-tab explore-tab-4-5">
        <div className="explore-tab-content">
          <div className="explore-tab-text">
            <div className="explore-tab-title">
              <h2>{title}</h2>
            </div>
            <div className="explore-tab-description">
              <p>{description}</p>
            </div>
          </div>
          <div className="explore-tab-link">
            <a href={link}>
              Learn more <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="explore-tab explore-tab-1">
        <div className="explore-tab-content">
          <div className="explore-tab-text">
            <div className="explore-tab-title">
              <h2 className={title.length > 8 ? "smaller-title" : ""}>
                {title}
              </h2>
            </div>
            <div className="explore-tab-description">
              <p>{description}</p>
            </div>
          </div>
          <div className="explore-tab-link">
            <a href={link}>
              Learn more <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
