# How to replace CSS images with IMG images

This time I'm trying explain (and understand myself) how to replace CSS images with good ol' `<img .../>` elements.

Technologies used:
- React with TypeScript
- Plain CSS files imported to React
- `object-fit` CSS property

## Common problem

Imagine you have a simple web page with a nice background image stretched across the screen like this:

![a nice scenery on portrait device](./public/portrait.png)

Usually such images are implemented with CSS, which allows you to set image dimensions freely to match your layout.

The problem with this approach is mainly semantical - background images are not marked as images (hence cannot be read using screen readers and they do not have `alt` attributes as old `<img />` tag has.).

CSS based images are also more difficult to optimise as in some frameworks like [Next.js](https://nextjs.org/) the normal images can be optimised during the build process.

## Better way to implement background images?

To create similar functionality using `img` element, first define your image like this:

```html
<img src="/scenery-800w.jpg" alt="My cool scenery picture!" />
```

and add some styles using css:
```css
img {
  /* makes sure the image element acts as a block */
  display: block;

  /* take all space horizontally, but limit height to avoid layout breakdowns */ 
  width: 100%;
  height: 150px;

  /* makes sure the image covers the whole container and is positioned in center */
  object-fit: cover;
  object-position: center center;
}
```

Note if you don't define `height` for your image, it will scale horizantally to keep the width-height ratio. It will also push your content lower when viewing the page on wider device.

You can clone  and run my code in this repo to see a reference implementation.

## Summary

And that's is! The change is rather simple and does not require much effort!

I would consider using this approach a good practise as it gives your markup a bit more semantic meaning and gives some room for improvements.

Both `object-fit` and `object-position` are supported by all the major browsers.

In real life you probably want to have different images for different devices, but this can be easily using [responsive images.](https://github.com/kallelat/blog-responsive-images)

**Feel free to browse the code, if you have any questions or improvement ideas let me know!**

## Author

Timo Kallela, for more information please visit my [GitHub profile](https://github.com/kallelat)

You can also contact me by [email](mailto:timo.kallela@gmail.com) or via [LinkedIn](https://www.linkedin.com/in/kallelat/)!

## License

Contents of this repository is licensed under [MIT](LICENSE) license.
