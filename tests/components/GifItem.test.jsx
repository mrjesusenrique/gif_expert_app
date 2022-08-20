const { render, screen } = require("@testing-library/react");
import GifItem from "../../src/components/GifItem";

describe("Pruebas en <GifItem />", () => {
  const title = "Leones";
  const url = "http://leones.com/";
  const id = "12345";

  test("Debe hacer hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} id={id} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GifItem title={title} url={url} id={id} />);

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("Debe mostrar el título en el componente", () => {
    render(<GifItem title={title} url={url} id={id} />);

    expect(screen.getByText(title)).toBeTruthy();
  });
});
