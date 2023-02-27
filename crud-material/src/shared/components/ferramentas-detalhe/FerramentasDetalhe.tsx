import { Box, Button, Divider, Icon, Paper, useTheme } from '@mui/material';

interface IFerramentasDeDetalheProps {
    textoBotaoNovo?: string;
    mostrarBotaoNovo?: boolean;
    mostrarBotaoApagar?: boolean;
    mostrarBotaoSalvar?: boolean;
    mostrarBotaoSalvarFechar?: boolean;

    aoCliclarEmNovo?:  () => void;
    aoClicarEmVoltar?: () => void;
    aoClicarEmApagar?: () => void;
    aoClicarEmSalvar?: () => void;
    aoClicarEmSalvarEFechar?: () => void;
}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
    textoBotaoNovo = 'Novo',

    mostrarBotaoNovo = true,
    mostrarBotaoApagar = true,
    mostrarBotaoSalvar = true,
    mostrarBotaoSalvarFechar = false,

    aoCliclarEmNovo,
    aoClicarEmVoltar,
    aoClicarEmApagar,
    aoClicarEmSalvar,
    aoClicarEmSalvarEFechar
}) => {
  const theme = useTheme();

  return (
    <Box
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      alignItems="center"
      height={theme.spacing(5)}
      component={Paper}
    >
      {mostrarBotaoSalvar && (<Button
        color='primary'
        disableElevation
        variant='contained'
        onClick={aoClicarEmSalvar}
        startIcon={<Icon>save</Icon>}
      >Salvar</Button>)}

      {mostrarBotaoSalvarFechar && (<Button
        color='primary'
        disableElevation
        variant='outlined'
        onClick={aoClicarEmSalvarEFechar}
        startIcon={<Icon>save</Icon>}
      >Salvar e voltar</Button>)}

      {mostrarBotaoApagar && (<Button
        color='primary'
        disableElevation
        variant='outlined'
        onClick={aoClicarEmApagar}
        startIcon={<Icon>delete</Icon>}
      >Apagar</Button>)}

      {mostrarBotaoNovo && (<Button
        color='primary'
        disableElevation
        variant='outlined'
        onClick={aoCliclarEmNovo}
        startIcon={<Icon>add</Icon>}
      >{textoBotaoNovo}</Button>)}

      <Divider variant='middle' orientation='vertical' />

      {<Button
        color='primary'
        disableElevation
        variant='outlined'
        onClick={aoClicarEmVoltar}
        startIcon={<Icon>arrow_back</Icon>}
      >Voltar</Button>}
    </Box>
  );
};