import { ProdutoRepository } from './produto.repository';
import { InjectRepository } from "@nestjs/typeorm";
import { ProdutoEntity } from "./produto.entity";
import { Repository } from 'typeorm';
import { ListaProdutoDTO } from './dto/ListaProduto.dto';
import { CriaProdutoDTO } from './dto/CriaProduto.dto';
import { AtualizaProdutoDTO } from './dto/atualizaProduto.dto';

export class ProdutoService {
    constructor(@InjectRepository(ProdutoEntity)
    private readonly produtoRepository: Repository<ProdutoEntity>) {
    }

    async criaProduto(dadosProduto: CriaProdutoDTO) {
        const produtoEntity = new ProdutoEntity();

        produtoEntity.nome = dadosProduto.nome;
        produtoEntity.valor = dadosProduto.valor;
        produtoEntity.usuarioId = dadosProduto.usuarioId;
        produtoEntity.quantidade = dadosProduto.quantidadeDisponivel;
        produtoEntity.descricao = dadosProduto.descricao;
        produtoEntity.categoria = dadosProduto.categoria;
        produtoEntity.caracteristicas = dadosProduto.caracteristicas;
        produtoEntity.imagens = dadosProduto.imagens;

        return this.produtoRepository.save(produtoEntity);
    }

    async listProdutos() {
        const produtosSalvos = await this.produtoRepository.find({
            relations: {
                imagens: true,
                caracteristicas: true,
            },
        });
        const produtosLista = produtosSalvos.map(
            (produto) =>
                new ListaProdutoDTO(
                    produto.id,
                    produto.nome,
                    produto.caracteristicas,
                    produto.imagens,
                ),
        );
        return produtosLista;
    }

    async atualizaProduto(id: string, novosDados: AtualizaProdutoDTO) {
        const entityName = await this.produtoRepository.findOneBy({ id });
        Object.assign(entityName, novosDados);
        return this.produtoRepository.save(entityName);
    }

    async deletaProduto(id: string) {
        await this.produtoRepository.delete(id);
    }
}