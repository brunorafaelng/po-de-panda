import os
import platform

print('--- 🏁 Iniciando Verificação do Sistema ---')

# 1. Verifica o nome de usuário
try:
    username = os.getlogin()
    print(f'✅ Nome de Usuário: {username}')
except OSError:
    print('⚠️ Não foi possível determinar o nome de usuário.')

# 2. Verifica o Sistema Operacional
os_name = platform.system()
os_release = platform.release()
print(f'✅ Sistema Operacional: {os_name} (Release: {os_release})')

print('--- 🏁 Verificação Concluída ---')
