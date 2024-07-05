import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyACYvlSd5AnMHLx_MXzgLwg8--Nt1skZsk");

export default async function Chatbot_testing() {
  const model =  genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  let data = `Steven Paul Jobs (February 24, 1955 to October 5, 2011) was an American businessman, inventor, and investor best known for co-founding the technology company Apple Inc. Jobs was also the founder of NeXT and chairman and majority shareholder of Pixar. He was a pioneer of the personal computer revolution of the 1970s and 1980s, along with his early business partner and fellow Apple co-founder Steve Wozniak.

  Jobs was born in San Francisco in 1955 and adopted shortly afterwards. He attended Reed College in 1972 before withdrawing that same year. In 1974, he traveled through India, seeking enlightenment before later studying Zen Buddhism. He and Wozniak co-founded Apple in 1976 to further develop and sell Wozniak's Apple I personal computer. Together, the duo gained fame and wealth a year later with production and sale of the Apple II, one of the first highly successful mass-produced microcomputers. Jobs saw the commercial potential of the Xerox Alto in 1979, which was mouse-driven and had a graphical user interface (GUI). This led to the development of the unsuccessful Apple Lisa in 1983, followed by the breakthrough Macintosh in 1984, the first mass-produced computer with a GUI. The Macintosh launched the desktop publishing industry in 1985 with the addition of the Apple LaserWriter, the first laser printer to feature vector graphics and PostScript.

  In 1985, Jobs departed Apple after a long power struggle with the company's board and its then-CEO, John Sculley. That same year, Jobs took some Apple employees with him to found NeXT, a computer platform development company that specialized in computers for higher-education and business markets, serving as its CEO. In 1986, he helped develop the visual effects industry by funding the computer graphics division of Lucasfilm that eventually spun off independently as Pixar, which produced the first 3D computer-animated feature film Toy Story (1995) and became a leading animation studio, producing over 27 films since.

  In 1997, Jobs returned to Apple as CEO after the company's acquisition of NeXT. He was largely responsible for reviving Apple, which was on the verge of bankruptcy. He worked closely with British designer Jony Ive to develop a line of products and services that had larger cultural ramifications, beginning with the "Think different" advertising campaign, and leading to the iMac, iTunes, Mac OS X, Apple Store, iPod, iTunes Store, iPhone, App Store, and iPad. In 2003, Jobs was diagnosed with a pancreatic neuroendocrine tumor. He died of respiratory arrest related to the tumor in 2011; in 2022, he was posthumously awarded the Presidential Medal of Freedom.`;


  // const embededData = await model.embedContent(data);
  // console.log("Embeded Data:",embededData.embedding.values);

  let query= "Steve have worked on which companies?"
  // const embededQuery = await model.embedContent(query);
  // console.log("Embeded Query:",embededQuery.embedding.values);

  function makePrompt(query, data) {
    const prompt = `
  You are a helpful and informative bot that answers questions using text from the reference passage included below. 
  Be sure to respond in a complete sentence, being comprehensive, including all relevant background information. 
  However, you are talking to a non-technical audience, so be sure to break down complicated concepts and 
  strike a friendly and conversational tone. 
  If the passage is irrelevant to the answer, you may ignore it.

  QUESTION: '${query}'
  PASSAGE: '${data}'
  ANSWER:
    `;
    
    return prompt;
  }
  let prompt=makePrompt(query,data);

  const result = await model.generateContent(prompt);
  const response =  result.response;
  const text = response.text();
  console.log(text);
  return <></>;
}
