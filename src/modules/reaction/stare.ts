import ReactionCommand from "../../types/Command/ReactionCommand/ReactionCommand";

export default class Stare extends ReactionCommand {
  constructor() {
    const imageUrls = [
      "https://i.imgur.com/6r9SmUG.gif",
      "https://i.imgur.com/OH19C2Z.gif",
      "https://i.imgur.com/Y7h4ydz.gif",
      "https://i.imgur.com/ISx4BbT.gif",
      "https://i.imgur.com/7TKsVSA.gif",
      "https://i.imgur.com/BV6yX7y.gif",
      "https://i.imgur.com/KA2TQFE.gif",
    ];

    super(imageUrls, {
      hidden: true,
    });
  }
}
