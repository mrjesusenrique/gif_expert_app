const { render } = require("@testing-library/react");
import GifItem from "../../src/components/GifItem";

describe("Pruebas en <GifItem />", () => {
  const title = "Leones";
  const url = "http://leones.com";
  const id = "12345";

  test("Debe hacer hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} id={id} />);
    expect(container).toMatchSnapshot();
  });
});
