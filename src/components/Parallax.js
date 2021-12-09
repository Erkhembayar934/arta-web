export default function Parallax() {
  return (
    <div>
      <div className="parallax-one">
        <h2>Arta</h2>
      </div>
      <style jsx>{`
        .parallax-one {
          padding-top: 200px;
          padding-bottom: 200px;
          overflow: hidden;
          position: relative;
          width: 100%;
          background-image: url(https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);
          background-attachment: fixed;
          background-size: cover;
          -moz-background-size: cover;
          -webkit-background-size: cover;
          background-repeat: no-repeat;
          background-position: top center;
        }
        h2 {
          font-family: "Oswald", sans-serif;
          font-size: 70px;
          letter-spacing: 10px;
          text-align: center;
          color: white;
          font-weight: 400;
          text-transform: uppercase;
          z-index: 10;
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
}
