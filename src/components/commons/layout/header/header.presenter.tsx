import * as S from './header.styles';
import { IHeaderUIProps } from './header.types';

export default function HeaderUI(props: IHeaderUIProps): JSX.Element {
    return (
            <S.Wrapper>
                <S.Container >
                    <S.ImgContainer>
                        <S.LogoImg onClick={props.onClickMain} src='data:image/png;base64,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' />
                    </S.ImgContainer>
                    <S.InfoContainer>
                        {props.isLogged ?
                            <S.InfoHref onClick={props.handleLogout}>로그아웃</S.InfoHref> :
                            <S.InfoHref onClick={props.onClickLogin}>가입하기</S.InfoHref>
                        }
                        <S.InfoHref>당신의 공간을 에어비앤비하세요</S.InfoHref>
                    </S.InfoContainer>
                </S.Container>
            </S.Wrapper>
    )
}