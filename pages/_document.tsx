import Document, { Html, Head, Main, NextScript } from '../node_modules/next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
            <meta name="description" content="Una App para listar y conocer diferentes podcast de la red"/>
            <meta name="robots" content="index,follow"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap" rel="stylesheet"></link>
            <link rel="icon" type="image/png" href="/images/nota-musical.png"/>
        </Head>
        <body className="my-body-class">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument