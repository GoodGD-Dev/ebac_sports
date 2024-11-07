import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Produto} from '../../App'

const CarrinhoSlice = createSlice({
  name: 'carrinho',
  initialState: {
    itens: []
  },
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const jogo = action.payload;

      if (state.itens)
    }
  }
})
