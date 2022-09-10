import './App.css'
import React from "react"

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio"
import Card from "./components/layout/Card"
import Familia from './components/basicos/Familia'
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'

export default _ => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className='Cards'>
            <Card titulo="#07 - Repetição - Tabela Produtos" color="#888">
                <TabelaProdutos />
            </Card>
            <Card titulo="#06 - Repetição" color="#808">
                <ListaAlunos />
            </Card>
            <Card titulo="#05 - Componente com filhos" color="#880">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Ana"/>
                    <FamiliaMembro nome="Maria"/>
                    <FamiliaMembro nome="Joao"/>
                </Familia>
            </Card>
            <Card titulo="#04 - Desafio Aleatorio" color="#080">
                <Aleatorio
                    min={1}
                    max={10} />
            </Card>
            <Card titulo="#03 - Fragmento" color="#088">
                <Fragmento />
            </Card>
            <Card titulo="#02 - Com Parametro" color="#008">
                <ComParametro
                    titulo="Situação do Aluno!"
                    aluno="Pedro"
                    nota={9.5} />
            </Card>
            <Card titulo="#01 - Primeiro">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
);