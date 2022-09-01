#include <stdio.h>
// 06. Armazenar nomes e nota 1, 2, de 15 alunos. calcular e armazenar a media. Armazenar tambem a situação do aluno: AP ou RP. 
// Imprimir uma listagem contendo nome, notas, media e a situação de cada aluno.

#define NUMEROALUNOS 15
#define TAMNOME 41
int main(){
    struct notasAlunos
    {
        float nota1, nota2;
        float media;
        char nome[TAMNOME], situacao[4];
    }alunos[NUMEROALUNOS];
    
    for(int i=0; i < NUMEROALUNOS; i++){
        printf("Digite o nome do %dº aluno: ", i+1);
        fgets(alunos[i].nome, TAMNOME, stdin);
            
        printf("Digite a primeira nota do aluno: ");
        scanf("%f", &alunos[i].nota1);
        
        printf("Digite a segunda nota do aluno: ");
        scanf("%f", &alunos[i].nota2);
        getchar();
        
        printf("------------------------ \n");
            
        alunos[i].media = (alunos[i].nota1 + alunos[i].nota2)/2;
            
        if(alunos[i].media > 5){
            strcpy(alunos[i].situacao,"AP.");
        } else {
            strcpy(alunos[i].situacao,"RP.");
        }
    }
    
    for( int j = 0; j < NUMEROALUNOS; j++) {
        printf("\n ======= Estudante número %d  ======= ", j+1);
        printf("\n Nome: %s", alunos[j].nome);
        printf("\n Nota 1: %.2f", alunos[j].nota1);
        printf("\n Nota 2: %.2f", alunos[j].nota2);
        printf("\n Média: %.2f", alunos[j].media);
        printf("\n Situação: %s", alunos[j].situacao);
    }
}