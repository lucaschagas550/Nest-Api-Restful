import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProdutoEntity } from "./produto.entity";

@Entity("produto_caracteristicas")
export class ProdutoCaracteristicaEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: "nome", length: 100, nullable: false })
    nome: string;

    @Column({ name: "descricao", length: 100, nullable: false })
    descricao: string;

    @ManyToOne(() => ProdutoEntity, (produto) => produto.imagens, {
        orphanedRowAction: 'delete', // Se esta linha n tiver relacao ela sera apagada
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    produto: ProdutoEntity;
}