import ply.lex as lex

# List of token names.
tokens = [
    'BUILD',        # build
    'AAN',          # a / an
    'NUMBER',       # number
    'SECTION',      # section
    'POSSESS',      # with/having/..
    'USERPROFILE',  # user profile
    'MINIMUM',      # minimum
    'PARAGRAPH',    # paragraph
    'COMMA',        # ,
    'IMAGE',        # image
    'AND',          # and
    'BUTTONTYPE',   # submit/enter/..
    'BUTTON',       # button
    'NAMED',        # labeled/named/..
    'NAME',         # string printed on the object
    'VERTICAL',     # vertical/vertically/..
    'HORIZONTAL',   # horizontal/horizontally/..
    'ARRANGED',     # arranged/..
]

t_BUILD         = r'(build)'
t_AND           = r'(and)'
t_AAN           = r'(\ba\b|\ban\b)'
t_SECTION       = r'(section|main\ssection)'
t_POSSESS       = r'(with|having)'
t_USERPROFILE   = r'(user\sprofile)'
t_MINIMUM       = r'(minimum)'
t_PARAGRAPH     = r'(paragraph)'
t_COMMA         = r'(,)'
t_IMAGE         = r'(image)'
t_BUTTONTYPE    = r'(submit|edit|enter|cancel)'
t_BUTTON        = r'(button)'
t_NAMED         = r'(labeled|named)'
t_NAME          = r'\"[a-zA-Z]+\"'
t_VERTICAL      = r'(vertically|vertical)'
t_HORIZONTAL    = r'(horizontally|horizontal)'
t_ARRANGED      = r'(arranged)'
t_ignore        = ' \t'


def t_newline(t):
    r'\n+'
    t.lexer.lineno += len(t.value)


def t_NUMBER(t):
    r'\d+'
    t.value = int(t.value)
    return t


def t_error(t):
    print("Illegal character '%s'" % t.value[0])
    t.lexer.skip(1)


lexer = lex.lex()


data = "build a main section having a user profile with minimum 2 paragraph, 1 image and a submit button " \
         "labeled \"Edit\" vertically arranged"

lexer.input(data)

for tok in lexer:
    print(tok)

