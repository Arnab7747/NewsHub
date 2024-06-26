import React, { Component } from "react";
import NewsItem from "./NewsItem";
import "./News.css";
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps={
    country:'in',
    category :'general',

  }
  static propTypes={
    country :PropTypes.string,
    category: PropTypes.string,
  }
  articles = [
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "The Decision: Jey Uso takes his talents away from The Bloodline: SmackDown highlights, June 16, 2023 - WWE",
      description:
        "A look back at all the drama from Jey Uso’s earth-shattering decision on his future with Roman Reigns and The Bloodline. Catch WWE action on Peacock, WWE Net...",
      url: "https://www.youtube.com/watch?v=HbNL9uHvwDE",
      urlToImage: "https://i.ytimg.com/vi/HbNL9uHvwDE/maxresdefault.jpg",
      publishedAt: "2023-06-17T03:20:20Z",
      content: null,
    },
    {
      source: {
        id: "espn",
        name: "ESPN",
      },
      author: "Paolo Uggetti",
      title: "Fowler stays atop U.S. Open after chaotic round - ESPN",
      description:
        "Rickie Fowler continued his chaotic but impressive play by making eight birdies, four pars and six bogeys Friday, giving him a one-shot lead at the U.S. Open.",
      url: "https://www.espn.com/golf/story/_/id/37867151/rickie-fowler-stays-atop-us-open-chaotic-second-round",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0617%2Fr1187542_1296x729_16%2D9.jpg",
      publishedAt: "2023-06-17T03:10:00Z",
      content:
        "LOS ANGELES -- Rickie Fowler followed up a historic 8-under 62 in the first round of the 2023 U.S. Open with a 2-under 68 in Friday's second round to grab a 1-stroke lead over Wyndham Clark heading i… [+4480 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "Stefanie Dazio",
      title:
        "Comedian Pete Davidson charged with reckless driving after Beverly Hills crash - The Associated Press",
      description:
        "LOS ANGELES (AP) — Los Angeles prosecutors charged former “Saturday Night Live” star Pete Davidson  with reckless driving Friday, three months after authorities said he crashed into a Beverly Hills home.",
      url: "https://apnews.com/article/pete-davidson-crash-beverly-hills-1e6e21df18668bfbb2cf5a61e6ac4534",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/72393e8ab0774b7fac0ea5fb35e63366/3000.webp",
      publishedAt: "2023-06-17T02:19:20Z",
      content:
        "LOS ANGELES (AP) Los Angeles prosecutors charged former Saturday Night Live star Pete Davidson with reckless driving Friday, three months after authorities said he crashed into a Beverly Hills home.\r… [+1035 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Barbie Latza Nadeau,Helen Regan",
      title: "Pope Francis in ‘better’ shape than before, surgeon says - CNN",
      description:
        "Pope Francis was discharged from Rome’s Gemelli hospital, where the 86-year-old had been recovering from abdominal surgery, on Friday.",
      url: "https://www.cnn.com/2023/06/16/europe/pope-francis-discharged-hospital-surgery-intl-hnk/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230616024851-01-pope-francis-leaves-hospital-061623.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-06-17T02:19:00Z",
      content:
        "Pope Francis was discharged from Romes Gemelli hospital Friday where the 86-year-old was recovering from abdominal surgery, after the procedure sparked renewed concerns over his health.\r\nThe pontiff … [+5393 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title: "Why Spotify's big bet on Meghan Markle fell flat - BBC",
      description:
        "The end of the Duchess of Sussex's podcast on Spotify is a sign of wider change in the industry.",
      url: "https://www.bbc.com/news/business-65936228",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/EC9B/production/_130117506_a4d3e703b94420c01752945750d4dc89b890d5d20_132_3500_19692000x1125.jpg",
      publishedAt: "2023-06-17T01:57:45Z",
      content:
        "When Spotify signed the Duke and Duchess of Sussex with an exclusive deal reportedly worth about $20m (£18m) in 2020, the royal couple were taking their first steps into the commercial world and podc… [+4998 chars]",
    },
    {
      source: {
        id: null,
        name: "KSL.com",
      },
      author: "https://www.facebook.com/kslcom/",
      title:
        "How to see 5 planets line up in the sky on Saturday morning - KSL.com",
      description:
        "There's another chance to see five planets lined up in the sky. Saturn, Neptune, Jupiter, Uranus and Mercury will appear together before sunrise on Saturday, weather permitting.",
      url: "https://www.ksl.com/article/50667744/how-to-see-5-planets-line-up-in-the-sky-on-saturday-morning",
      urlToImage:
        "https://img.ksl.com/slc/2934/293481/29348158.jpg?filter=kslv2/responsive_story_lg",
      publishedAt: "2023-06-17T01:36:44Z",
      content:
        "Estimated read time: 1-2\r\n minutes\r\nNEW YORK Wake up early this weekend to catch a celestial sight: Five planets will line up in the sky before sunrise on Saturday.\r\nSaturn, Neptune, Jupiter, Uranus … [+1139 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Tierney Sneed,Annie Grayer,Zachary Cohen",
      title:
        "Special counsel seeks court order to ensure Trump and his defense don’t share materials turned over in discovery - CNN",
      description:
        "Special counsel Jack Smith’s team is asking the judge in the classified documents case against Donald Trump to bar the former president and his defense team from publicly disclosing some of the materials shared in the criminal case as part of the discovery pr…",
      url: "https://www.cnn.com/2023/06/16/politics/justice-trump-prosecution-protective-order/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230403155319-trump-classified-documents-file.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-06-17T00:37:00Z",
      content:
        "Special counsel Jack Smiths team is asking the judge in the classified documents case against Donald Trump to bar the former president and his defense team from publicly disclosing some of the materi… [+3915 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "Jim Salter",
      title:
        "George Floyd's killing capped years of violence, discrimination by Minneapolis police, DOJ says - The Associated Press",
      description:
        "The report was the result of a sweeping two-year probe, and it confirmed many of the citizen complaints about police conduct that emerged after Floyd’s death. The investigation found that Minneapolis officers used excessive force, including “unjustified deadl…",
      url: "https://apnews.com/article/george-floyd-minneapolis-police-investigation-19d384c2d90b186b627f9d8cf1d5be2e",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/a7b93f1bfcd846868b8b8ebaf398115f/3000.webp",
      publishedAt: "2023-06-17T00:35:43Z",
      content:
        "MINNEAPOLIS (AP) The Justice Department on Friday issued a withering critique of Minneapolis police, alleging that they systematically discriminated against racial minorities, violated constitutional… [+7430 chars]",
    },
    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Chantz Martin",
      title:
        "Thousands protest Sisters of Perpetual Indulgence outside Dodger Stadium hours before start of Pride Night - Fox News",
      description:
        "Demonstrators opposed to the inclusion of The Sisters of Perpetual Indulgence at Pride Night gathered outside Dodger Stadium hours ahead of the festivities.",
      url: "https://www.foxnews.com/sports/thousands-protest-sisters-of-perpetual-indulgence-outside-dodgers-stadium-hours-before-start-of-pride-night",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2023/06/Dodgers-protestors.jpg",
      publishedAt: "2023-06-17T00:34:03Z",
      content:
        "Several hours before the first pitch was thrown at the Los Angeles Dodgers' Pride Night, a large group of protesters gathered outside the stadium gates.\r\nThe religious organization Catholics for Cath… [+2340 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title: "Man dies after brutal bear attack in Yavapai County - 12 News",
      description:
        "The bear has been killed and there is no longer a threat to the community, Yavapai County Sheriff's Office deputies said.",
      url: "https://www.youtube.com/watch?v=x8LlsmVjJaA",
      urlToImage: "https://i.ytimg.com/vi/x8LlsmVjJaA/maxresdefault.jpg",
      publishedAt: "2023-06-17T00:32:38Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "The Athletic",
      },
      author: "The Athletic Staff",
      title:
        "Gregg Berhalter: ‘Work to do’ in rebuilding relationship with Gio Reyna as coach returns to USMNT - The Athletic",
      description:
        "Berhalter said he hasn't met with or spoken to Reyna since the World Cup but plans to do so before September window.",
      url: "https://theathletic.com/4617070/2023/06/16/gregg-berhalter-usmnt-gio-reyna/",
      urlToImage:
        "https://cdn.theathletic.com/app/uploads/2023/06/16133946/GettyImages-1440368596-1024x683.jpg",
      publishedAt: "2023-06-16T23:07:53Z",
      content:
        "Gregg Berhalter said there is work to do in trying to rebuild his relationship with Gio Reyna during his first news conference since the U.S. mens national team announced the coachs return to his pre… [+3370 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Kerry Justich",
      title:
        "Berberine is hailed online as 'nature's Ozempic.' Why experts say 'it's not accurate.' - Yahoo Life",
      description:
        "While berberine grows in popularity, experts say there isn't enough research to show it's effective for weight loss.",
      url: "https://www.yahoo.com/lifestyle/berberine-weight-loss-ozempic-222422326.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/dh_tXrS0yA2Gy91g0xAM8g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2023-06/37753b70-0c79-11ee-b7db-c7a5804c94fd",
      publishedAt: "2023-06-16T22:24:22Z",
      content:
        'Experts say "it\'s not accurate" to call berberine "nature\'s Ozempic." (Illustration: Aisha Yousaf for Yahoo / Photo: Getty Images)\r\nConversations about weight loss medications are "everywhere," accor… [+7972 chars]',
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Erin Snodgrass",
      title:
        "Putin warns the West of Russian tactical nukes being put in Belarus - Business Insider",
      description:
        "US and Western officials quickly brushed off Putin's most recent batch of nuclear threats, which have been frequent since the war in Ukraine began.",
      url: "https://www.businessinsider.com/putin-warns-west-russian-tactical-nukes-being-put-in-belarus-2023-6",
      urlToImage:
        "https://i.insider.com/648cd5ab20f78100189fda63?width=1200&format=jpeg",
      publishedAt: "2023-06-16T22:12:00Z",
      content:
        "Vladimir Putin issued a weighty warning to the West this week as he announced a first tranche of Russian tactical nuclear weapons has been stationed in neighboring Belarus as a stop-gap against a pos… [+2758 chars]",
    },
    {
      source: {
        id: "al-jazeera-english",
        name: "Al Jazeera English",
      },
      author: "Al Jazeera",
      title:
        "US energy dept got two ransom requests in data breach - Al Jazeera English",
      description:
        "DoE, which manages US nuclear weapons and nuclear waste sites related to the military, notified Congress of the breach.",
      url: "https://www.aljazeera.com/economy/2023/6/16/us-energy-dept-got-two-ransom-requests-in-data-breach",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2022/08/GettyImages-521369998.jpg?resize=1920%2C1440",
      publishedAt: "2023-06-16T22:08:12Z",
      content:
        "The United States Department of Energy has received ransom requests from the Russia-linked extortion group Cl0p at both its nuclear waste facility and the scientific education facilities that were re… [+2885 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Equipping the Space Station to Produce More Power on This Week @NASA – June 16, 2023 - NASA",
      description:
        "Equipping the space station to produce more power, our newest experimental X-plane, and preparing to test a new laser communications system … a few of the st...",
      url: "https://www.youtube.com/watch?v=6U3WiUA2CEs",
      urlToImage: "https://i.ytimg.com/vi/6U3WiUA2CEs/maxresdefault.jpg",
      publishedAt: "2023-06-16T22:04:59Z",
      content: null,
    },
    {
      source: {
        id: "independent",
        name: "Independent",
      },
      author: "Rachel Sharp",
      title:
        "Texas tornado news and map: State of emergency in Perryton after devastating tornado leaves three dead - The Independent",
      description: "Perryton tornado damage news",
      url: "https://www.independent.co.uk/climate-change/texas-tornado-perryton-map-tx-today-b2359050.html",
      urlToImage:
        "https://static.independent.co.uk/2023/06/16/10/SEI160442332.jpg?quality=75&width=1200&auto=webp",
      publishedAt: "2023-06-16T22:02:11Z",
      content:
        "Sign up to the Independent Climate email for the latest advice on saving the planet\r\nGet our free Climate email\r\nAn 11-year-old boy was among three people killed by the massive tornado which tore thr… [+5400 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Post",
      },
      author: "Emily Lefroy",
      title:
        "Humans have pumped enough groundwater to change Earth's spin - New York Post ",
      description:
        "“Our study shows that among climate-related causes, the redistribution of groundwater actually has the largest impact on the drift of the rotational pole,” lead author Ki-Weon Seo said.",
      url: "https://nypost.com/2023/06/16/humans-have-pumped-enough-groundwater-to-change-earths-spin/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2023/06/NYPICHPDPICT000012793359.jpg?quality=75&strip=all&w=1024",
      publishedAt: "2023-06-16T21:56:00Z",
      content:
        "What in the Earth?\r\nA new study has found that humans pumped so much water out of the ground over 17 years that Earth has tilted nearly 3 feet to the east.\r\n“Earths rotational pole actually changes a… [+2773 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Clare Duffy",
      title:
        "Meta lowers the minimum age for its Quest headsets from 13 to 10 - CNN",
      description:
        "Facebook-parent Meta plans to lower the minimum age for its virtual reality headsets from 13 years old to 10 years old, despite pressure from lawmakers not to market its VR services to younger users.",
      url: "https://www.cnn.com/2023/06/16/tech/meta-quest-headsets-lowering-minimum-age/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230616163117-meta-quest-2-headset-minimum-age-stock-restricted.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-06-16T21:38:00Z",
      content:
        "Facebook-parent Meta plans to lower the minimum age for its virtual reality headsets from 13 years old to 10 years old, despite pressure from lawmakers not to market its VR services to younger users.… [+3149 chars]",
    },
    {
      source: {
        id: null,
        name: "WSOC Charlotte",
      },
      author: "WSOCTV.com News Staff",
      title:
        "Michael Jordan finalizes sale of Charlotte Hornets - WSOC Charlotte",
      description:
        "Months after we reported that Michael Jordan was in talks to sell the Charlotte Hornets, ESPN is reporting Friday that the sale of the NBA team has been finalized.",
      url: "https://www.wsoctv.com/news/local/michael-jordan-finalizes-sale-charlotte-hornets-sources-tell-espn/YYEMTJNB7FA6XBHIK4WWJXMWRQ/",
      urlToImage:
        "https://cmg-cmg-tv-10030-prod.cdn.arcpublishing.com/resizer/SJ4eCf6AyI-RoNEA2iKKA5PkTvg=/1440x810/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/cmg/UYX3FBGIXRB4FBERMZ5CPXX5EI.jpg",
      publishedAt: "2023-06-16T21:21:29Z",
      content:
        "CHARLOTTE — Months after we reported that Michael Jordan was in talks to sell the Charlotte Hornets, the team announced Friday that the sale has been finalized.\r\nESPNs Adrian Wojnarowski first report… [+4547 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title:
        "Daniel Ellsberg: Pentagon Papers whistleblower dies aged 92 - BBC",
      description:
        'His 1971 leak exposed lies about the Vietnam War and saw him dubbed "the most dangerous man in America".',
      url: "https://www.bbc.com/news/world-us-canada-65932944",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/678D/production/_118790562_gettyimages-1310466333-594x594.jpg",
      publishedAt: "2023-06-16T21:20:26Z",
      content:
        "Media caption, 2022 interview: Pentagon Papers whistle-blower Daniel Ellsberg says he was a secret back-up for Wikileaks\r\nDaniel Ellsberg, the whistleblower who exposed the extent of US involvement i… [+4387 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      page: 1, // Initialize page to 1
    };
  }

  async componentDidMount() {
    //async function

    let url =`https://newsapi.org/v2/top-headlines?country=us&category=business&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&apikey=c968d057a3f34b4aaca1de5737069bea`;
    let data = await fetch(url);
    let parseData =await data.json();
    console.log(parseData);
    this.setState({articles:parseData.articles})
  }

  //next and previous buttons
  handlePreviousClick=async()=>{
    console.log("previous")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c968d057a3f34b4aaca1de5737069bea&page=${this.state.page - 1}`; 
    let data = await fetch(url);
    let parseData =await data.json();
    console.log(parseData);
    this.setState({
      page: this.state.page - 1,
      articles:parseData.articles
    })

  }
  handleNextClick=async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c968d057a3f34b4aaca1de5737069bea&page=${this.state.page + 1}`; // for next
    let data = await fetch(url);
    let parseData =await data.json();
    console.log(parseData);
    this.setState({
      page: this.state.page + 1,
      articles:parseData.articles
    })
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">News Hub - Top Head Lines</h1>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title?element.title:""}
                  description={element.description?element.description.slice(0, 50):""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
              
            );
          })}
        </div>
         {/* buttons */}
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next</button>

        </div>
      </div>
    );
  }
}

export default News;
