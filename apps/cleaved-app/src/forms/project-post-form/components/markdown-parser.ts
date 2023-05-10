import TurndownService from "turndown";
import { Converter } from "showdown";

export function markdownToHtml(markdownText: string) {
  const converter = new Converter({
    strikethrough: true,
  });

  const html = converter.makeHtml(markdownText);

  //  converty <de> to <s> so that react-quill can edit strike properly.
  //  without this conversion, when you convert from markdown to html to use in react-quill,
  //  it will not recognize <del> and apply the strike
  const newHTML = html.replace(/<del>/g, "<s>").replace(/<\/del>/g, "</s>");

  return newHTML;
}

export function htmlToMarkdown(htmlText: string) {
  const turndownService = new TurndownService();

  // Add custom rule for emphasis tags
  turndownService.addRule("emphasis", {
    filter: ["em", "i"],
    replacement: function (content, node, options) {
      return options.emDelimiter + content + options.emDelimiter;
    },
  });

  // Add custom rule for strike tags
  turndownService.addRule("strike", {
    filter: ["del", "s"],
    replacement: (content) => {
      return "~~" + content + "~~";
    },
  });

  return turndownService.turndown(htmlText);
}
