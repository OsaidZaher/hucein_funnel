declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        'media-id'?: string;
        aspect?: string;
        autoplay?: string;
        muted?: string;
      }, HTMLElement>;
    }
  }
}

const VSLPlayer = () => {
  return (
    <div className="vsl-container">
      <wistia-player 
        media-id="m4tn323i7r" 
        aspect="1.7777777777777777"
      />
    </div>
  );
};

export default VSLPlayer;
