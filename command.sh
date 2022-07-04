# Docs => https://blog.betrybe.com/git/git-branch/

# Entrar em uma brach existente
exec git checkout nome-da-brach

# criar uma nova branch => copy
exec git checkout -b copy

# subir a nona branch para o github
exec git push --set-upstream origin copy

# Listar todas as branch
exec git branch -a     # remotas
exec git branch --list # local
