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
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

export default _ => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className='Cards'>
            <Card titulo="#13 - Desafio Mega" color="#58E">
                <Mega qtd={8}></Mega>
            </Card>
            <Card titulo="#12 - Contador" color="#EF0">
                <Contador numeroInicial={10}></Contador>
            </Card>
            <Card titulo="#11 - Componente Controlado" color="#EAF">
                <Input></Input>
            </Card>
            <Card titulo="#10 - Comunicação Indireta" color="#00F">
                <IndiretaPai></IndiretaPai>
            </Card>
            <Card titulo="#09 - Comunicação Direta" color="#0F0">
                <DiretaPai></DiretaPai>
            </Card>
            <Card titulo="#08 - Renderização condicional" color="#F00">
                <ParOuImpar numero={21} />
                <UsuarioInfo usuario={{nome:'Fernando'}} />
                <UsuarioInfo usuario={{email:'fer@email.com'}} />
            </Card>
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