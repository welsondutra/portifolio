import React from 'react';
import * as S from './styles';
import data from './data.json';

const Skills = () => {
  return (
    <S.Section id="skills">
      <S.Title>Tecnologias</S.Title>
      <S.ImgLine>
        {data.skills.map((item) => {
          return (
            <S.BoxImage key={item.id}>
              <S.Image src={item.src} />
              <S.H4>{item.title}</S.H4>
              <S.P>{item.data}</S.P>
            </S.BoxImage>
          );
        })}
      </S.ImgLine>
    </S.Section>
  );
};

export default Skills;
