# Docs => https://blog.betrybe.com/git/git-branch/
# Docs => https://www.varonis.com/pt-br/blog/git-branching
# Docs => https://github.com/heudersena/all_exemple/blob/main/Git_hub/Git-config.md

# https://www.pdflabs.com/tools/pdftk-the-pdf-toolkit/pdftk_free-2.02-win-setup.exe
# Separar PDF => pdftk tim.pdf  burst output page_%02d.pdf

# Entrar em uma brach existente
exec git checkout nome-da-brach

# Criação de um branch a partir de outro branch
exec git checkout -b branch1 branch2

# criar uma nova branch => copy
exec git checkout -b copy

# subir a nona branch para o github
exec git push --set-upstream origin copy

# Listar todas as branch
exec git branch -a     # remotas
exec git branch --list # local

# Merge de branches em um repositório local
exec git checkout main
exec git merge copy


# Configuração do GitHub na maquina
exec git config --global core.editor code
exec git config --global --edit