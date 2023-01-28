// @ts-nocheck
import React from "react";
import styles from "./Produtos.module.css"
import { Link } from "react-router-dom"
import Head from "./Head"

const Produtos = () => {
  const [product, setProduct] = React.useState(null)

  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto`)
      .then((response) => response.json())
      .then((json) => setProduct(json))
  }, [])

  if (product === null) return null;
  return (
    <div className={`${styles.produtos} + animeLeft`}>
      <Head
        title="Ranek"
        description="Descrição do site Ranek"
      />
      {product.map((product) => (
        <Link to={`produto/${product.id}`} key={product.id}>
          <h1 className={styles.nome}>{product.nome}</h1>
          <img src={product.fotos[0].src} alt="" />
        </Link>
      ))}
    </div>
  )
}

export default Produtos