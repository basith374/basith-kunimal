import styles from "./styles.module.css";
import Card from "./Card";

const cards = [
  {
    name: "Parallax background",
    image: "http://assets.basithkunimal.com/parallax.jpg",
    desc: "This tutorial shows you how to add interactive parallax backgrounds to your website. You can move your mouse around and see the layers move around like below.",
    link: "https://basithkunimal.medium.com/adding-an-interactive-parallax-background-to-a-webpage-798d8c54e90b",
  },
  {
    name: "Color picker",
    image: "http://assets.basithkunimal.com/color-picker.jpg",
    desc: "This tutorial shows you how to use the iro.js color picker in a react application. This color picker is very lightweight and doesn’t have any dependencies.",
    link: "https://basithkunimal.medium.com/adding-a-simple-color-picker-to-your-web-app-4046d7dc4269",
  },
  {
    name: "Water effect",
    image: "http://assets.basithkunimal.com/ripple.jpg",
    desc: "In this tutorial, you’re going to learn how to add flowing water effect to a background image like shown below.",
    link: "https://basithkunimal.medium.com/making-an-image-ripple-like-water-458ecf37792c",
  },
  {
    name: "React chess",
    image: "http://assets.basithkunimal.com/chess-game.jpg",
    desc: "How to make a chess game using react hooks",
    link: "https://basithkunimal.medium.com/building-a-chess-game-using-react-hooks-f5a045a2d769",
  }
];

export default function Blogs() {
  return (
    <div className={styles.container}>
      <div className={styles.titleX}>Blogs</div>
      <div className={styles.box}>
        <div className={styles.title}>Blogs</div>
        <div className={styles.content}>
          {cards.map((c, i) => (
            <Card key={i} {...c} />
          ))}
        </div>
      </div>
    </div>
  );
}
