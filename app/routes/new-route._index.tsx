export default function JokesIndexRoute() {
  return (
    <div>
      <p>Je suis l'index de la nouvelle route</p>
      <p>
        Je suis rendu car Remix a fait un routing sur la route{" "}
        <code>/joke</code> puis a fait un nested routing sur <code>/</code> et /
        correspond à <code>index</code>... Donc moi !
      </p>
    </div>
  );
}
