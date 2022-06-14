import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryPreviewContainer =
styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

export const Title =
styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    margin-left: 20px;
	}

  @media screen and (max-width: 400px) {
    margin-top: 20px;
	}
`

export const Preview =
styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 25px;
    margin: 0 20px;
	}

  @media screen and (max-width: 400px) {
		display: grid;
		grid-template-columns: 1fr;
		margin: 0 10px;
		}
`
