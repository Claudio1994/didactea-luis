// Vencimiento del token
// 60 segundos
// 60 minutos
// 24 horas
// 30 días
CADUCIDAD_TOKEN = 60*60*24*30;

// SEED  de autenticación
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// URL
process.env.URL = process.env.URL || 'localhost:5000';

