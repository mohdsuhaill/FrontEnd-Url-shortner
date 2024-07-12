import React from "react";

const Url = () => {
  return (
    <div>
      <h1 className="text-center url">URL Shortner</h1>
      <section id="urlbox" className="text-center urlbox">
        <h1 className="">Paste the URL to be shortened</h1>
        <form action="shortener.php" method="post">
          <div id="formurl">
            <input
              type="text"
              className="form-control short"
              name="u"
              placeholder="Enter the link here"
            />
            <div id="btn btn-primary">
              <input type="submit" value="Shorten URL" />
            </div>
          </div>
        </form>
        <p className="boxtextcenter">
          ShortURL is a free tool to shorten URLs and generate short links
          <br />
          URL shortener allows to create a shortened link making it easy to
          share
        </p>
      </section>
    </div>
  );
};

export default Url;
