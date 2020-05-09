import React from 'react';
import {Title, Form, Repositories} from './styles';
import logoImg from '../../assets/logo.svg';
import {FiChevronRight} from 'react-icons/fi';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer"/>
            <Title>Explore repositórios no github</Title>

            <Form>
                <input placeholder="Digite o nome do repositório"/>
                <button type="submit">pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img
                        src={logoImg}
                        alt="Daniel Nogueira"
                    />
                    <div>
                        <strong>dnogueir/node-challenge</strong>
                        <p>Node challenge description</p>
                    </div>

                    <FiChevronRight size={20}/>
                </a>
            </Repositories>

            <Repositories>
                <a href="teste">
                    <img
                        src={logoImg}
                        alt="Daniel Nogueira"
                    />
                    <div>
                        <strong>dnogueir/node-challenge</strong>
                        <p>Node challenge description</p>
                    </div>

                    <FiChevronRight size={20}/>
                </a>
            </Repositories>

            <Repositories>
                <a href="teste">
                    <img
                        src={logoImg}
                        alt="Daniel Nogueira"
                    />
                    <div>
                        <strong>dnogueir/node-challenge</strong>
                        <p>Node challenge description</p>
                    </div>

                    <FiChevronRight size={20}/>
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;
