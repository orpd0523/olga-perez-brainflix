import "./UploadVideo.scss";
import UploadForm from "../UploadForm/UploadForm";

function UploadVideo() {
  return (
    <main className="upload-section">
      <section className="container ">
        <h1 className="typography typography--h1">Upload Video</h1>
        <UploadForm />
      </section>
    </main>
  );
}

export default UploadVideo;
