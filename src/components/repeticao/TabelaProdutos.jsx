import React from "react"
import produtos from '../../data/produtos'
import './TabelaProdutos.css'

export default (props) => {
    const produtosTD = produtos.map((produto, id) => {
        return (
            <tr key={produto.id} className={id % 2 == 0 ? 'Par' : 'Impar'}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco.toFixed(2)}</td>
            </tr>
        )
    })

    return (
        <div className="TabelaProdutos">
            <table>
                <tr>
                    <th>Id</th>
                    <th>Produto</th>
                    <th>Preço</th>
                </tr>
                {produtosTD}
            </table>
        </div>
    )
}