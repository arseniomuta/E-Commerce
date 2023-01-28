// @ts-nocheck
import React from "react"
import styles from "./Produto.module.css"
import { useParams } from "react-router-dom"
import Head from "./Head"

const Produto = () => {
  const [product, setProduct] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchProduto(url) {

      try {
        setLoading(true)
        const response = await fetch(url)
        const json = await response.json()
        setProduct(json)
      } catch (erro) {
        setError('Um erro ocorreu')
      } finally {
        setLoading(false)
      }
    }

    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
  }, [id])

  if (loading) return <div className="loading"></div>
  if (error) return <p>{error}</p>
  if (product === null) return null
  return (
    <section className={styles.produto + " animeLeft"}>
      <Head
        title={`Renek | ${product.nome}`}
        description={`Ranek | Esse é um produto: ${product.nome}`}
      />
      <div>
        {product.fotos.map((foto) => (
          <img key={foto.src} src={foto.src} alt={foto.titulo} />
        ))}
      </div>
      <div>
        <h1 className={styles.nome} >{product.nome}</h1>
        <span className={styles.preco}>R$ {product.preco}</span>
        <p className={styles.descricao}>{product.descricao}</p>
      </div>
    </section>
  )
}

export default Produto