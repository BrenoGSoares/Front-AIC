import styles from "./Eventos.module.css";
import React, { useState } from "react";
import Add from "../../assets/more.png";

import { TableFooter } from "../Table/TableFooter/TableFooter";
import { CloseOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
 
export function Eventos({ title }) {
  const [popup, setPop] = useState(false);
  const [fontValue, setFontes] = useState();
  const [tipoValue, setTipos] = useState();

  const handleClickOpen = () => {
    setPop(!popup);
  };

  const closePopup = () => {
    setPop(false);
  };

  const [causaList, setCausaList] = useState([{ causa: ""}]);

  const [consequenciaList, setConsequenciaList] = useState([{ consequencia: ""}]);

  const handleClickCausa = () => {
    setCausaList([...causaList, { causa: ""}]);
  };

  const handleClickConsequencia = () => {
    setConsequenciaList([...consequenciaList, { consequencia: ""}]);
  };

  return (
    <main className={styles.mainEventos}>
      <div className={styles.textEventos}>
        <p>{title}</p>
      </div>
      <button className={styles.openEvents} onClick={handleClickOpen}>Adicionar Evento</button>

      <div>
        {popup?
        <div className={styles.backgroundPopup}> 
          <div className={styles.popup}>
            
            <div className={styles.popupHeader}>
              <p>Adicionar Evento</p>
            </div>
            
            <div className={styles.row}>
              <div className={styles.leftContainer}>
                
                <div className={styles.fakeCol}>
                  <p>{`Evento`}</p>
                  <input className={styles.defaultInput} type="text" autoComplete="off" id="Evento" placeholder="Informe o nome do evento" />
                </div>


                <div className={styles.fakeCol}>
                  <p>{`Atividade`}</p>
                  <select  value={fontValue} onChange={e=>setFontes(e.target.value)} className={styles.seletor} required>
                    <option className={styles.seletorLabel} disabled selected value="">Selecione a atividade relacionada</option>
                  </select>
                </div>

              </div>     
              
              <div className={styles.defaultContainer}>
                
                <div className={styles.fakeCol}>
                  <p className={styles.seletorHeader}>{`Causas`}</p>
                    {causaList.map((singleCausa, index) => (
                      <div key={index}>
                        <input className={styles.defaultInput} type="text" autoComplete="off" id="Causa" placeholder="Informe a causa do evento" required />
                        {causaList.length - 1 === index && causaList.length < 3 && 
                        (
                          <span id="addCausa" onClick={handleClickCausa}><p className={styles.addCausaConsequencia}><img src={Add} className={styles.addMore} />Adicionar mais uma causa</p></span>
                        )}
                      </div>
                    ))}
                </div>
                  
                  <div className={styles.fakeCol}>
                    <p className={styles.seletorHeader}>{`Fontes`}</p>
                    {causaList.map((singleCausa, index) => (
                      <div key={index}>
                        <select value={fontValue} onChange={e=>setFontes(e.target.value)} className={styles.seletor} required>
                          <option className={styles.seletorLabel} disabled selected value="">Selecione a fonte relacionada</option>
                          <option value="Pessoas">Pessoas</option>
                          <option value="Processos">Processos</option>
                          <option value="Sistemas">Sistemas</option>
                          <option value="Infraestrutura">Infraestrutura Física</option>
                          <option value="Organizacional">Estrutura Organizacional</option>
                          <option value="Tecnologia">Tecnologia</option>
                          <option value="Eventos Externos">Eventos Externos</option>
                        </select>
                      </div>
                    ))}
                  </div>
              </div>

              <div className={styles.defaultContainer}>
                <div className={styles.fakeCol}>
                  <p className={styles.seletorHeader}>{`Consequências`}</p>
                  {consequenciaList.map((singleConsequencia, index) => (
                    <div key={index}>
                      <input className={styles.defaultInput} type="text" autoComplete="off" id="Consequencia" placeholder="Informe as consequências o evento" required />
                      {consequenciaList.length -1 === index && consequenciaList.length < 3 && 
                      (
                        <span id="addConsequencia" onClick={handleClickConsequencia}><p className={styles.addCausaConsequencia}><img src={Add} className={styles.addMore} />Adicionar mais uma consequência</p></span>
                      )}
                    </div>
                  ))}
                </div>
                <div className={styles.fakeCol}>
                  <p className={styles.seletorHeader}>{`Tipos`}</p>
                  {consequenciaList.map((singleConsequencia, index) => (
                    <div key={index}>
                      <select value={tipoValue} onChange={e=>setTipos(e.target.value)} className={styles.seletor} required>
                        <option value="" className={styles.seletorLabel} disabled selected>Selecione o tipo relacionado</option>
                        <option value="Estrategico">1-Risco Estrategico</option>
                        <option value="Operacional">2-Risco Operacional</option>
                        <option value="Conformidades">3-Risco de Conformidades</option>
                        <option value="Financeiro">4-Risco Financeiro/Orçamentário</option>
                        <option value="Imagem">5-Risco de Imagem</option>
                        <option value="Integridade">6-Risco de Integridade</option>
                      </select>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.buttons}>
              <div className={styles.applyButton}>
                <button className={styles.addButton} id={styles.applyButton}>Adicionar</button>
              </div>
              <div className={styles.closeButton}>
                <button className={styles.abortButton} id={styles.closeButton} onClick={closePopup}>Cancelar e fechar</button>
              </div>
            </div>
      
          </div>
        </div>:""}
      </div>
    </main>
  );
}
