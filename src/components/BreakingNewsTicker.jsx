import React, { useState, useEffect } from "react";
import "../styles/BreakingNewsTicker.css"; // Import the CSS file

const BreakingNewsTicker = () => {
  const [stories, setStories] = useState([]);
  const apiKey = "998880889a4a48edbfafb951681c61e3";
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    const fetchHackerNews = async () => {
      try {
        const response = await fetch(
          "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
        );
        const storyIds = await response.json();
        const topStories = storyIds.slice(0, 50).map(async (id) => {
          // Fetch 50
          const storyResponse = await fetch(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
          );
          return storyResponse.json();
        });
        const resolvedStories = await Promise.all(topStories);
        setStories(resolvedStories);
      } catch (error) {
        console.error("Error fetching Hacker News:", error);
      }
    };

    const fetchNewsApi = async () => {
      try {
        const apiUrl = `https://newsapi.org/v2/everything?q=artificial%20intelligence&apiKey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setNewsArticles(data.articles.slice(0, 50)); // Fetch 50
      } catch (error) {
        console.error("Error fetching NewsAPI:", error);
      }
    };

    fetchHackerNews();
    fetchNewsApi();
  }, [apiKey]);

  return (
    <div className="ticker-container">
      <h2
        style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "#eee",
          backgroundColor: "#222",
          paddingTop: "10px",
          paddingBottom: "10px",
          textDecoration: "underline",
        }}
      >
        Live API News
      </h2>
      <div style={{ display: "inline-block" }}>
        {stories.map((story) => (
          <div key={story.id} className="ticker-item-wrapper">
            <div className="ticker-item-content">
              <div>{story.title}</div>
              {story.url && (
                <div className="small-text">
                  {story.url.substring(8, 50) + "..."}
                </div>
              )}
            </div>
          </div>
        ))}
        {newsArticles &&
          newsArticles.map((article, index) => (
            <div key={index} className="ticker-item-wrapper">
              <div className="ticker-item-content">
                <div>{article.title}</div>
                <div className="small-text">
                  {article.description &&
                    article.description.substring(0, 50) + "..."}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BreakingNewsTicker;
